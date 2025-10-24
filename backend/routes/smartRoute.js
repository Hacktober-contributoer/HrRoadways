import express from "express";
import axios from "axios";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { validate } from '../utils/validator.js';
import { smartRouteValidation } from '../validation/smartRouteValidation.js';
import { AppError } from '../utils/errorHandler.js';

dotenv.config();
const router = express.Router();

// Path to Haryana.json (bus database)
const dbPath = path.join(process.cwd(), "Databases/State_Database/Haryana.json");

router.post("/", validate(smartRouteValidation), async (req, res, next) => {
  const { source, destination } = req.body;

  try {
    // Check if database file exists
    if (!fs.existsSync(dbPath)) {
      return next(new AppError("Database file not found", 404));
    }

    const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

    // Step 1: Get travel time + distance from Google Maps API (if API key exists)
    let travelTime = "N/A";
    let distance = "N/A";
    
    if (process.env.GOOGLE_MAPS_API_KEY) {
      try {
        // Use Google Maps Distance Matrix API
        const gmapUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(source)}&destinations=${encodeURIComponent(destination)}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

        const response = await axios.get(gmapUrl);
        
        if (response.data && response.data.rows && response.data.rows.length > 0 && 
            response.data.rows[0].elements && response.data.rows[0].elements.length > 0 &&
            response.data.rows[0].elements[0].status === "OK") {
          
          const element = response.data.rows[0].elements[0];
          travelTime = element.duration.text;
          distance = element.distance.text;
        }
      } catch (gmapError) {
        console.error('Google Maps API Error:', gmapError.message);
        // Continue with default values if Google Maps API fails
      }
    }

    // Step 2: Match the source and destination in bus database
    const bestMatches = db.buses
      .filter(
        (b) =>
          b.route.toLowerCase().includes(source.toLowerCase()) &&
          b.route.toLowerCase().includes(destination.toLowerCase())
      )
      .map((bus) => ({
        busName: bus.name,
        travelTime,
        distance,
        type: "Fastest Route",
        eta: bus.eta || 30,
        stops: bus.stops || []
      }));

    res.json({ routes: bestMatches.slice(0, 3) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error finding smart routes", error: error.message });
  }
});

export default router;