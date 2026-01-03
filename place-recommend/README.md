#  Smarty (Resturant Recommender)

A location-based web application that helps users discover nearby resturant based on preferences such as **mood, budget, rating, and distance**, with an interactive map and real-time filtering.

##  Features

-  **Use My Location**
  - Automatically detects user location using browser Geolocation API
  - Displays nearby recommended places on map and list

- **Manual Location Search**
  - Users can search places by entering a city or area
  - Designed to be extendable with real geocoding APIs

-  **Smart Filters**
  - Mood (chill, party, work)
  - Budget (low / medium / high)
  - Minimum rating
  - Distance range (km)

-  **Live Search**
  - Header search filters places instantly as user types

-  **Interactive Map**
  - Google Maps integration
  - Muted, modern map style
  - Dynamic markers for recommended places
  - Hover on place card highlights corresponding marker

-  **Recently Visited**
  - Clicking a place adds it to visit history
  - Prevents duplicates

- **Smooth Animations**
  - Subtle UI animations using Framer Motion
  - Improves user experience and feedback

-  **Graceful Fallback Handling**
  - Uses demo data when external APIs are unavailable
  - Prevents app crashes and blank screens

## Tech Stack

- **React.js** (Hooks, state lifting, derived state)
- **Vite** (Fast development setup)
- **Google Maps JavaScript API**
- **Framer Motion** (Animations)
- **CSS Grid & Flexbox**

## Project Architecture

- Centralized state management in `App.jsx`
- Derived data (`filteredPlaces`) instead of mutating original state
- Map ↔ list synchronization via shared state
- Defensive programming for external APIs (`window.google` guards)
- Component-based scalable structure

