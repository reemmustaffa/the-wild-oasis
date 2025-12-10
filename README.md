// ...existing code...
# The Wild Oasis

A modern, interactive Single Page Application (SPA) built with React + Vite for managing bookings, cabins, guests and related features. This README is modeled on the "WorldWise" structure to highlight learning goals, tech, features and folder layout.

---

## 🧠 Learning Focus

This project was created to practice and demonstrate advanced React concepts:

- React Router: nested routes and protected routes for SPA navigation.
- Context API + useReducer: scalable global state (auth, data).
- Advanced useEffect: controlled side-effects and optimized API calls.
- Performance: lazy loading (React.lazy + Suspense) and code-splitting.
- Component design: reusable, modular and testable components.

---

## 🧩 Key Features

- SPA using React Router for client-side navigation.
- Dynamic data management (bookings, cabins, guests) via API/services.
- Protected routes with a simple auth layer.
- Global state via Context + Reducers (e.g., Dark mode, auth).
- Performance optimizations: lazy-loaded pages + Suspense fallbacks.
- Reusable UI components and custom hooks.

---

## 🛠️ Tech Stack

- React 18 (JSX)
- Vite (dev server & build)
- React Router v6
- Context API + useReducer
- @tanstack/react-query (where used)
- CSS Modules / plain CSS
- JavaScript (ESM)
- Optional: json-server for local mock API (if present)
- ESLint

---

## 📂 Folder Structure (overview)

Top-level
- .eslintrc.json
- .gitignore
- index.html
- netlify.toml / vercel.json (deployment)
- package.json
- README.md
- vite.config.js
- public/

src/
- src/App.jsx — main app component
- src/main.jsx — app entry / router / providers
- src/context/ — shared contexts (e.g., DarkModeContext.jsx)
- src/features/ — feature modules (authentication, bookings, cabins, dashboard, settings)
  - src/features/bookings/useBookings.js — example React Query hook
- src/hooks/ — custom hooks (useLocalStorageState.js, useMoveBack.js, useOutsideClick.js)
- src/pages/ — page components (Account.jsx, Booking.jsx, etc.)
- src/services/ — API wrapper functions
- src/ui/ — reusable UI components
- src/styles/ — shared styles
- src/utils/ — helpers and utilities
- src/data/ — data uploader / mock data (if present)

---

## ⚙️ Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. (Optional) Run mock backend if provided (json-server):
```bash
npm run server
```

3. Start dev server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

See scripts in package.json for exact commands.

---

## 🌟 Key Highlights

- ProtectedRoute component to guard private pages.
- Context + useReducer patterns for async state management (loading / success / error).
- SpinnerFullPage or Suspense fallback for global loading states.
- Clear, modular folder layout for scaling features.

---

If you want, I can:
- Replace the current README contents with this full version.
- Add badges (build, coverage), contributing guide, or deployment steps for Netlify/Vercel.
- Add examples for key hooks (e.g., useBookings) or a quick API usage snippet.
