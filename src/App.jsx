import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import ScrollButton from "./components/ScrollButton";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/nav";
import Footer from "./components/footer";
import Header from "./components/Header";
import ThemeWrapper from "./components/ThemeWrapper";
import NewsletterSubscription from "./components/NewsletterSubscription";
import BookingPage from "./components/BookingPage"; // do not lazy load this

// ✅ Lazy-loaded components
const Hero = lazy(() => import("./components/hero"));
const Available = lazy(() => import("./components/Available"));
const AboutUs = lazy(() => import("./components/Aboutus"));
const Trip = lazy(() => import("./components/Trip"));
const BestRides = lazy(() => import("./components/BestRides"));
const InfoPage = lazy(() => import("./components/InfoPage"));
const RulesAndGuidelines = lazy(() => import("./components/Rules"));
const UnderConstruction = lazy(() => import("./components/UnderConstruction"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Blog = lazy(() => import("./components/Blog"));
const PaymentOptions = lazy(() => import("./components/Paymentoptions"));
const BusTracker = lazy(() => import("./components/Track"));
const LiveTracking = lazy(() => import("./components/LiveTracking"));
const RoyalHaryanaTourism = lazy(() =>
  import("./components/RoyalHaryanaTourism")
);
const ServicesPage = lazy(() => import("./components/Services"));
const TravelLocations = lazy(() => import("./components/TravelLocation"));
const HelplinePage = lazy(() => import("./components/HelpLinepage"));
const Reviews = lazy(() => import("./components/Review"));
const AffiliateProgram = lazy(() => import("./components/AffiliateProgram"));
const BusCard = lazy(() => import("./components/BusCard"));
const Tutorial = lazy(() => import("./components/Tutorial"));
const DonatePage = lazy(() => import("./components/DonatePage"));
const WeeklyTimetable = lazy(() => import("./components/Timetable"));
const TourGuidePage = lazy(() => import("./components/TourGuidePage"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const Login = lazy(() => import("./components/Login"));
const MyBookings = lazy(() => import("./components/Userprofile"));
const NotFound = lazy(() => import("./components/NotFound"));
const ToastTest = lazy(() => import("./components/ToastTest"));
const FaqPage = lazy(() => import("./components/faq"));
const TravelPackagesPage = lazy(() =>
  import("./components/TravelPackagesPage")
);
// const SmartRoute = lazy(() => import('./components/SmartRoute')); // uncomment when file exists

// ✅ Wrapper for booking page with router state
function BookingPageWrapper() {
  const location = useLocation();
  const { selectedBus } = (location && location.state) || {};
  return <BookingPage selectedBus={selectedBus} />;
}

function App() {
  return (
    <ThemeWrapper>
      <div className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white">
        <LanguageProvider>
          <Router>
            <Header />
            <Navigation />

            <Suspense
              fallback={
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  Loading...
                </div>
              }
            >
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route
                  path="/travel-packages"
                  element={<TravelPackagesPage />}
                />
                <Route path="/Available" element={<Available />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/trip" element={<Trip />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/bestrides" element={<BestRides />} />
                <Route path="/policy" element={<InfoPage />} />
                <Route path="/rules" element={<RulesAndGuidelines />} />
                <Route path="/live-tracking" element={<LiveTracking />} />
                <Route
                  path="/under-construction"
                  element={<UnderConstruction />}
                />
                <Route
                  path="/contactUs"
                  element={<Navigate to="/contact" replace />}
                />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/payment" element={<PaymentOptions />} />
                <Route path="/track" element={<BusTracker />} />
                <Route path="/luxury" element={<RoyalHaryanaTourism />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/travellocations" element={<TravelLocations />} />
                <Route path="/helpline" element={<HelplinePage />} />
                <Route path="/schedule" element={<WeeklyTimetable />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/affiliate" element={<AffiliateProgram />} />
                <Route path="/card" element={<BusCard />} />
                <Route path="/guide" element={<Tutorial />} />
                <Route path="/tour-guide" element={<TourGuidePage />} />
                <Route path="/booking" element={<BookingPageWrapper />} />
                <Route path="/login" element={<Login />} />
                <Route path="/mybookings" element={<MyBookings />} />
                <Route path="/yash" element={<h1>Yash&apos;s Page</h1>} />
                <Route path="/toast-test" element={<ToastTest />} />
                {/* <Route path="/smart-route" element={<SmartRoute />} /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            {/* 🟢 Newsletter + Footer + Scroll Button */}
            <Footer />
            <ScrollButton />
          </Router>
        </LanguageProvider>
      </div>
    </ThemeWrapper>
  );
}

export default App;
