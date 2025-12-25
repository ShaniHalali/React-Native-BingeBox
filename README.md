# BingeBox 🎬

BingeBox is a cross-platform movie browsing app built with **React Native (Expo)**. It allows users to explore popular, top-rated, upcoming movies, and save favorite ones using **Redux** with automatic sync to **AsyncStorage**. The app supports **Dark Mode**, smooth navigation, and is compatible with both **Android** (APK available) and **iOS** (tested on Expo Go).


https://github.com/user-attachments/assets/49ff3912-9d6e-457c-963f-30ca914740e5


---

## 🚀 Features

* Browse:

  * Popular Movies
  * Top Rated
  * Upcoming
* View Movie Details
* Add/Remove to Favorites
* Persist favorites with Redux + AsyncStorage
* All fetched movies are cached to avoid redundant API calls and improve performance
* Adaptive **Dark Mode** styling
* Responsive UI across screen sizes

---

## 🧠 Technologies & Highlights

- **React Native** with **Expo SDK 54**
- **Expo Router** for file-based navigation
- **Redux Toolkit** for centralized state management  
  ↳ Favorites and movie lists are stored globally to minimize unnecessary API calls
- **AsyncStorage** for persistent local storage of favorite movies
- **TMDB API** integration for real-time movie data
- **Dark Mode** support across the entire UI
- **iOS & Android** compatibility

### ✅ Bonus Features Implemented

- 🔧 Integrated **EAS Build** to generate APK files
- 💾 Persistent state between sessions using **AsyncStorage** + **Redux**
- ⚡ Optimized performance with in-memory caching of movie data

---

## 📦 APK Build

The project is fully configured for **APK generation** using EAS Build:

* Android package ID: `com.shanihalali.BingeBox`
* Custom App Icon and Splash Screen
* `.gitignore` includes `.expo/`, native folders, and env files
* Compatible React version aligned to Expo SDK

✅ You can generate the APK with:

```bash
eas build --platform android --profile preview
```

---

## 📁 Folder Structure (Simplified)

```
├── assets/                # Icons and images
├── app/                   # Pages and routes
│   └── (movieDetails)/    # Dynamic detail screen for [id]
├── components/            # Reusable UI components
├── constants/             # API and storage keys
├── redux/                 # Redux slices and store setup
│   └── loadFavorites.js   # Initializes state from AsyncStorage
├── .env                   # Environment variables
├── app.json               # Expo configuration
├── eas.json               # Build configuration
└── package.json           # Dependencies and scripts
```

---

## 📱 Platform Compatibility

* ✅ Tested on **Android** via Expo Go and APK
* ✅ Tested on **iOS** via Expo Go
* ✅ Optimized for both **Light** and **Dark Mode**

---

## 📌 Author

Shani Halali
Full Stack Mobile Developer

---

## 📝 License

This project is for educational and portfolio purposes.

---
