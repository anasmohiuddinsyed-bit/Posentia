# Cognivators & POSENTIA Landing Page

Premium landing page for Cognivators (intelligence infrastructure) and POSENTIA (revenue leak detection for operators).

## Features

- **Dark midnight blue theme** - Premium, trustworthy design
- **Global country toggle** - Switch between US and UAE content
- **Google Sign-in** - Secure authentication for CSV uploads
- **Email collection** - All form submissions collected (ready for Google Sheets integration)
- **Smooth navigation** - All buttons and links scroll to sections
- **3D Model viewer** - Interactive POSENTIA robot visualization

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration (for authentication)

1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Google Authentication
3. Copy your Firebase config
4. Create `.env` file:

```bash
cp .env.example .env
```

5. Add your Firebase credentials to `.env`:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
```

### 3. Add Cognivators Logo

Add your Cognivators logo SVG file to `public/cognivators-logo.svg`. The favicon will automatically use it.

### 4. Run Development Server

```bash
npm run dev
```

Visit http://localhost:8080

## Email Collection

All form submissions are currently stored in browser localStorage. To integrate with Google Sheets:

1. Set up Google Sheets API
2. Update `src/lib/emailCollection.ts` with your API endpoint
3. Or use a service like Zapier/Make.com to connect form submissions to Google Sheets

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder, ready for deployment to Vercel, Netlify, or any static host.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Top navigation with country toggle
│   ├── CognivatorsIntro.tsx # Cognivators platform section
│   ├── PosentiaBridge.tsx   # Bridge between Cognivators and POSENTIA
│   ├── PosentiaHero.tsx     # POSENTIA hero (region-dependent)
│   ├── PosentiaModules.tsx  # 4 intelligence modules (region-dependent)
│   ├── PosentiaPricing.tsx  # Pricing plans (region-dependent)
│   ├── CsvDemo.tsx          # CSV upload demo (requires auth)
│   ├── DemoForm.tsx         # Contact form (region-dependent email)
│   ├── Footer.tsx           # Footer with links
│   └── AuthModal.tsx        # Google sign-in modal
├── contexts/
│   ├── CountryContext.tsx   # Global country state (US/UAE)
│   └── AuthContext.tsx      # Firebase authentication state
├── lib/
│   ├── firebase.ts          # Firebase configuration
│   └── emailCollection.ts   # Lead collection utility
├── content.ts               # All copy content (US & UAE separated)
└── pages/
    └── index.tsx            # Main landing page
```

## Notes

- CSV upload ML model and forecasting are intentionally left out (as requested)
- All buttons link to sections or pages (no 404s)
- Email collection is ready for Google Sheets/Notion integration
- Authentication required for CSV uploads for security

