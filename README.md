### 🏀 Nike Clone – E-Commerce Frontend

* A modern Nike-inspired e-commerce web application built with React, Redux Toolkit, and Vite.
* This project replicates core features of a real-world shopping platform including authentication, admin panel, cart management, wishlist, protected routes, and dynamic product rendering.

# 🚀 Live Preview
* https://nike-aga.vercel.app/

## 🛠 Tech Stack
    - ⚛ React (Vite)
    - 🗂 Redux Toolkit
    - 🔄 React Router
    - 📦 Axios (custom instance)
    - 🎨 Custom CSS
    - 🔐 Protected Routes
    - 🧠 Middleware (LocalStorage sync)
    - 📁 Modular Component Architecture

## 📂 Project Structure
```
src/
│
├── components/
│   ├── Nav/
│   ├── Footer/
│   ├── modals/
│   ├── pages/
│   │   ├── Main pages/
│   │   ├── Navigated pages/
│   │   ├── Admin/
│   │   ├── Registration/
│   │   └── Protection/
│
├── redux/
│   ├── CartSlice.jsx
│   ├── WishSlice.jsx
│   ├── ProductsSlice.jsx
│   ├── NavigationSlice.jsx
│   ├── CountrySlice.jsx
│   ├── ToggleSearchSlice.jsx
│   ├── Store.jsx
│   └── Middleware/
│
├── service/
│   ├── instance.js
│   ├── adminService.js
│   ├── regService.js
│   ├── sellService.js
│
├── Layout/
└── assets/
```

## ✨ Features

# 🛍 Product System
    - Dynamic product rendering
    - Product details page
    - Category-based navigation
    - Filtering logic
    - Slider integration (image & video)

# 🛒 Cart System
    - Add to cart
    - Remove from cart
    - Quantity update
    - Cart persistence via LocalStorage middleware
    - Checkout page

# ❤️ Wishlist
    - Add / Remove products
    - Redux-powered state handling

# 🔐 Authentication
* Sign Up / Sign In
    - Profile page
    - Protected routes
    - Higher Order Component (WithAuth)
    - ProtectedRoute wrapper

# 🛠 Admin Panel
    - Add product
    - Edit product
    - Modal-based management
    - Loading states

# 🌍 Localization Support
    - Country selection
    - Redux-based country state
    - Custom middleware for storage sync

# 🔐 Protected Routing Logic
    - ProtectedRoute → checks auth state
    - WithAuth → wraps components
    - Redux → manages authentication state
* Users cannot access restricted pages without authentication.

# ⚙️ Installation
* Clone the repository
    - git clone https://github.com/your-username/nike-aga.git
    - cd nike-aga
    - npm install
    - npm run dev

# 🧠 State Management Architecture
* Redux slices:
    - CartSlice
    - WishSlice
    - ProductsSlice
    - NavigationSlice
    - CountrySlice
    - ToggleSearchSlice
    - ByIdSlice

# Custom middleware:
    - LocaleStorageMiddleware.js
    * Automatically syncs Redux state with LocalStorage.

# 🌐 API Layer
* Custom axios instance:
    - instance.js

* Service modules:
    - adminService.js
    - regService.js
    - sellService.js
* Clean separation between UI and API logic.

# 📸 Screens Included
    - Main landing page
    - Product page
    - Shopping cart
    - Wishlist
    - Admin dashboard
    - Member section
    - Checkout page

# 🧩 Component Highlights
    - Reusable button components
    - Modal system (Search, Country, Help, Admin)
    - Mobile Navigation
    - Scroll helper
    - Loader & Error page
    - Layout wrapper


