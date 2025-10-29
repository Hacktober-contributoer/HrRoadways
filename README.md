
  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
  
  <h1 align="center">HrRoadways</h1>
  
  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
<p align="center">
  <img src="https://img.shields.io/badge/BUILD-grey?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PASSING-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge" />
</p>

<div align="center"><p><a href="https://github.com/NishantRana07/HrRoadways/issues"><strong>Report a Bug • </strong></a>
<a href="https://github.com/NishantRana07/HrRoadways/issues"><strong>Request a Feature</strong></a></p>
</div>

<h4 align="center">
  HrRoadways is a comprehensive project designed to provide users with an intuitive platform to check bus routes, timings, and real-time updates for government bus services.
</h4>
<h2 align="center">
  <a href="https://hrroadways.vercel.app/" target="_blank" rel="noopener noreferrer">🌐 Live Demo</a>
</h2>

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## 🌟 Vision

Make public bus info simple, reliable, and accessible to everyone — across languages and devices. HrRoadways aims to reduce travel friction by surfacing accurate routes, schedules, and live updates in a lightweight, easy-to-use web app.

  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## 🎯 Mission

Provide an inclusive, multilingual platform that:
- Lets users quickly find bus routes, stops, and timings.
- Delivers real-time status and useful alerts.
- Enables community contributions for better local coverage.
- Keeps privacy, performance, and accessibility as first-class concerns.

  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
  
## Why HrRoadways?

HrRoadways solves everyday transit friction by making government bus information easy to find, understand, and use.

- Problem solved: consolidates routes, timings, and live updates into one lightweight web app so commuters don’t need multiple sources.
- Multilingual by design: supports 13 Indian languages to serve diverse users across regions.
- Lightweight & fast: built with React + Vite and optimized for low bandwidth and mobile devices.
- Reliable data focus: integrates authoritative route/schedule sources and simple JSON-backed datasets for quick iteration.
- Accessibility & inclusivity: semantic UI, keyboard navigation, and language-first UX reduce barriers for all users.
- Community-driven: contributors can add places, translations, and local corrections to improve coverage.
- Privacy-conscious: no unnecessary tracking; minimal data collection with clear retention practices.
- Production-ready: easy to deploy, monitor, and scale with standard tooling (CI, hosting, backups).

 <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

 <!-- Project Structure as HTML for README.md -->
<h2>📁 Project Structure</h2>
<pre>
HrRoadways/
├── .github/
├── .vscode/
├── Backend/
├── Databases/
│   └── State_Database/
├── backend/
│   ├── routes/
│   └── mainServer.js
├── libs/
├── public/
├── src/
│   ├── components/
│   └── assets/
├── Places/
│   └── Location/
│       └── Location.json
├── .env
├── .gitignore
├── CLERK_SETUP.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTION_GUIDELINES.md
├── LICENSE
├── README.md
├── ROUTES_GUIDE.md
├── TranslationLink.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── vite.config.js
</pre>


<ul>
  <li><b>.github/</b>: GitHub Actions workflows, issue templates, and CI/CD configuration</li>
  <li><b>.vscode/</b>: Visual Studio Code workspace settings and extensions</li>
  <li><b>Backend/</b>: (May be legacy or alternative backend logic; clarify in your repo)</li>
  <li><b>Databases/State_Database/</b>: State-specific bus route and schedule JSON data</li>
  <li><b>backend/</b>: Node.js + Express backend code (API logic & routing)</li>
  <li><b>libs/</b>: Shared utility libraries and helper modules</li>
  <li><b>public/</b>: Static files (images, favicon, manifest) served at root</li>
  <li><b>src/components/</b>: React UI components for frontend</li>
  <li><b>src/assets/</b>: Images, icons, and other static frontend resources</li>
  <li><b>Places/Location/Location.json</b>: JSON files with details about popular places/cities</li>
  <li><b>.env</b>: Environment variables for secrets or API keys (not tracked in git)</li>
  <li><b>.gitignore</b>: Specifies files/folders git should ignore</li>
  <li><b>CLERK_SETUP.md</b>: Clerk authentication setup instructions</li>
  <li><b>CODE_OF_CONDUCT.md</b>: Contributor behavior standards and policies</li>
  <li><b>CONTRIBUTION_GUIDELINES.md</b>: Steps and etiquette for contributing</li>
  <li><b>LICENSE</b>: Project's open-source license text</li>
  <li><b>README.md</b>: Main documentation and onboarding guide</li>
  <li><b>ROUTES_GUIDE.md</b>: Custom routes documentation</li>
  <li><b>TranslationLink.md</b>: Instructions for translation collaboration</li>
  <li><b>eslint.config.js</b>: ESLint configuration for code linting</li>
  <li><b>index.html</b>: Main HTML entry point for frontend</li>
  <li><b>package-lock.json</b>, <b>package.json</b>: NPM package configuration and dependency lockfiles</li>
  <li><b>postcss.config.js</b>: PostCSS configuration file</li>
  <li><b>tailwind.config.js</b>: Tailwind CSS configuration</li>
  <li><b>vercel.json</b>: Vercel deployment configuration</li>
  <li><b>vite.config.js</b>: Vite build and tooling configuration</li>
</ul>



## Project Flowchart
<img width="1125" height="760" alt="Untitled diagram-2025-10-11-075010" src="https://github.com/user-attachments/assets/5a406a55-d242-4b7f-9aec-de0b0194a896" />

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
 
## ⚙️ Tech Stack

<div align="center">

| Technology    | Purpose                                   |
|---------------|--------------------------------------------|
| React + Vite  | Frontend framework & build tooling         |
| React Router  | Client-side routing                        |
| i18next       | Internationalization                       |
| Tailwind CSS  | Utility-first styling                      |
| Framer Motion | Smooth, production-ready animations        |
| Node.js + Express | Backend server                       |
| Axios         | HTTP client for API requests               |

</div>


  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
  


<h2 align="center">🌏 National Language Support</h2>

<p align="center">HrRoadways supports <b>13 Indian languages</b> to serve users across India 🇮🇳</p>

<div align="center">

| Language  | Code | Native Name   |
|-----------|------|---------------|
| English   | en   | English       |
| Hindi     | hi   | हिन्दी        |
| Bengali   | bn   | বাংলা         |
| Telugu    | te   | తెలుగు        |
| Marathi   | mr   | मराठी         |
| Tamil     | ta   | தமிழ்         |
| Gujarati  | gu   | ગુજરાતી      |
| Kannada   | kn   | ಕನ್ನಡ         |
| Malayalam | ml   | മലയാളം       |
| Punjabi   | pa   | ਪੰਜਾਬੀ       |
| Oriya     | or   | ଓଡ଼ିଆ        |
| Assamese  | as   | অসমীয়া       |
| Urdu      | ur   | اردو          |

</div>

  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
  
<h2 align="center">📝 Language Features</h2>

<div align="center">

| Feature | Description |
|---------|-------------|
| 🔤 Unicode Support | Handles multilingual text seamlessly |
| 🌐 Localization | Supports 2 Indian languages for wider reach |
| 🗂️ Language Files | Each language stored in separate JSON for scalability |
| ⚡ Fast Switching | Toggle between languages instantly |
| 🛠️ Easy Maintenance | Simple structure for adding new languages |

</div>


  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
  
<h2 align="center">⚡ For Developers</h2>

### Internationalization (i18n)
The project uses `react-i18next` for translations. Files are in `src/i18n/locales/`.  
To add new translations:
1. Update the appropriate file in `src/i18n/locales/`
2. Use the `useTranslation` hook: `const { t } = useTranslation();`
3. Reference translations with: `{t('key.subkey')}`

### Backend Server

This project includes a backend server built with Node.js and Express to handle API requests.

#### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check endpoint |
| `/api/smartRoute` | POST | Get smart route suggestions |

#### Smart Route API

The smart route API accepts a POST request with the following JSON body:

```json
{
  "source": "Chandigarh",
  "destination": "Delhi"
}
```

It returns route suggestions based on the bus database with optional travel time and distance data from Google Maps API.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# API Keys
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Database Paths
DB_PATH=./Databases/State_Database/Haryana.json
```

To get a Google Maps API key:
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for the project
4. Go to "APIs & Services" > "Library"
5. Search for "Distance Matrix API" and enable it
6. Go to "APIs & Services" > "Credentials"
7. Click "Create Credentials" > "API Key"
8. Copy the API key and add it to your `.env` file

---

##  📁 HrRoadways – Full Project Structure

<pre>
HrRoadways/
│
├── .github/                                # GitHub configuration & workflows
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md                   # Template for reporting bugs
│   │   ├── feature_request.md              # Template for feature requests
│   │   └── general_issue.md                # General issue template
│   │
│   ├── workflows/
│   │   ├── issue-create-automate-message.yml  # Auto message for issues
│   │   └── pr-create-automate-message.yml     # Auto message for PRs
│   │
│   ├── PULL_REQUEST_TEMPLATE.md            # Pull request template
│   ├── pull_request_template.md            # Duplicate/alternative PR template
│   ├── image.png                           # Workflow or repo-related image
│   └── image-1.png
│
├── .vscode/                                # VSCode configurations
│   ├── launch.json
│   └── settings.json
│
├── Backend/                                # Main backend folder
│   ├── src/
│   ├── routes/                             # API routes
│   │   └── notifications.js               # Push notification routes
│   ├── utils/                              # Utility functions
│   │   └── notificationEvents.js          # Notification event handlers
│   ├── .env.sample                         # Example environment file
│   ├── package.json
│   └── package-lock.json
│
├── Databases/                              # Databases and JSON data
│   └── State_Database/
│       └── Haryana.json
│
├── backend/                                # Backend routes & server files
│   ├── routes/
│   ├── libs/
│   ├── public/
│   ├── mainServer.js
│   └── server.js
│
├── Places/                                 # Additional app data (e.g., maps)
│
├── assets/                                 # Assets (icons, images, etc.)
│   └── icons/
│
├── techstack/                              # Tech stack-related info/resources
│
├── Buses.jpg                               # Static image asset
├── _redirects                              # For routing (used in Vercel/Netlify)
├── service-worker.js                       # PWA service worker file
│
├── src/                                    # Frontend source code
│   ├── assets/
│   ├── components/                         # Reusable UI components
│   │   ├── Notifications/                  # Notification components
│   │   │   ├── NotificationSettings.jsx    # Notification settings UI
│   │   │   └── NotificationTest.jsx        # Notification testing component
│   ├── contexts/                           # React contexts
│   │   └── NotificationContext.jsx         # Notification state management
│   ├── data/                               # Static data files
│   ├── hooks/                              # Custom React hooks
│   ├── i18n/                               # Internationalization setup
│   ├── services/                           # API and backend services
│   │   └── notificationService.js          # Notification API client
│   ├── store/                              # State management (Redux/Zustand/etc.)
│   ├── styles/                             # CSS/Tailwind/Global styles
│   │   └── NotificationSettings.css        # Notification component styles
│   ├── utils/                              # Helper functions
│   │   └── notifications.js                # Notification utility functions
│   ├── App.jsx                             # Main React App component
│   ├── index.css
│   ├── main.jsx                            # Entry point
│   └── translations.json                   # Language translations
│
├── .env                                    # Environment variables
├── .gitignore                              # Git ignore rules
│
├── CLERK_SETUP.md                          # Clerk authentication setup
├── CODE_OF_CONDUCT.md                      # Contributor behavior rules
├── CONTRIBUTION_GUIDELINES.md              # How to contribute
├── LICENSE                                 # Open-source license
├── PUSH_NOTIFICATIONS.md                   # Push notifications documentation
├── README.md                               # Project documentation
├── ROUTES_GUIDE.md                         # API routes documentation
├── TranslationLink.md                      # Translation related guide
│
├── eslint.config.js                        # ESLint configuration
├── index.html                              # Root HTML file (Vite entry)
├── package.json                            # Project dependencies and scripts
├── package-lock.json                       # Dependency lock file
├── postcss.config.js                       # PostCSS configuration
├── tailwind.config.js                      # TailwindCSS configuration
├── vercel.json                             # Vercel deployment settings
└── vite.config.js                          # Vite configuration
</pre>

- Json Database hosting link - https://jsonblob.com/api/jsonBlob/1333092652136194048

  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/NishantRana07/HrRoadways.git
   ```
2. Navigate to the project directory and install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your API keys (see Environment Variables section above)

### Frontend Development

**Development mode** (hot reload):

```bash
npm run dev
```

The app will open at `http://localhost:5173` (default Vite port).

**Production mode** (served by backend):

```bash
npm run build
NODE_ENV=production npm run server
```

The app will be served at `http://localhost:50001` (or port specified in `.env`).

### Backend Server

Run the backend server for API features:

```bash
npm run server
```

- **Development**: Backend API only on port `50001`
- **Production** (`NODE_ENV=production`): Serves both API and built frontend from `/dist`

### Testing the API

**Health Check:**
```bash
curl http://localhost:50001/api/health
```

**Smart Route (Bus search):**
```bash
curl -X POST http://localhost:50001/api/smartRoute \
  -H "Content-Type: application/json" \
  -d '{"source": "Chandigarh", "destination": "Delhi"}'
```

📖 For comprehensive API documentation and more examples, see [`docs/curl_examples.md`](docs/curl_examples.md)

<h1 align="center">Popular Places Repository</h1>
<h4 align="center">
  A centralized repository to store and manage information about popular places across various locations.
</h4>

  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">

## Format for Adding Popular Places

To add popular places to the repository, follow the format specified below:


  <img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="100%">
  
### File Structure

<pre>
Places/
├── Location/
│   └── Location.json
</pre>

### JSON Format

```json
{
  "location": "City or Region Name",
  "places": [
    {
      "name": "Place Name",
      "category": "Category (e.g., Historical, Restaurant, Park, etc.)",
      "description": "A brief description of the place.",
      "latitude": "Latitude Coordinate",
      "longitude": "Longitude Coordinate"
    }
  ]
}
```

## Example

Here is an example of how to add a location:

**File:** `Places/NewYork/NewYork.json`

```json
{
  "location": "New York",
  "places": [
    {
      "name": "Central Park",
      "category": "Park",
      "description": "A large public park in New York City, featuring lakes, gardens, and walking trails.",
      "latitude": "40.785091",
      "longitude": "-73.968285"
    },
    {
      "name": "Statue of Liberty",
      "category": "Historical",
      "description": "An iconic symbol of freedom and democracy located on Liberty Island.",
      "latitude": "40.689247",
      "longitude": "-74.044502"
    }
  ]
}
```

````

```

```

```
