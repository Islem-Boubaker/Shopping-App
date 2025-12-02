# Shopping App 🛒

A React Native e-commerce application built with Expo.

## Features

- Browse products
- View product details
- Add items to shopping cart
- Manage shopping cart

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **Redux Toolkit** - State management
- **React Navigation** - Navigation library

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

Install Expo CLI globally:

```bash
npm install -g expo-cli
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Islem-Boubaker/Shopping-App.git
cd Shopping-App
```

2. Install dependencies:

```bash
npm install
```

Or install all packages directly with one command:

```bash
npm install @expo/vector-icons@^15.0.3 @react-navigation/native@^6.1.18 @react-navigation/native-stack@^6.11.0 @reduxjs/toolkit@^2.11.0 expo@54.0.20 expo-font@^14.0.9 expo-status-bar@~3.0.8 inline-style-prefixer@^6.0.0 react@19.1.0 react-dom@19.1.0 react-native@0.81.5 react-native-gesture-handler@~2.28.0 react-native-safe-area-context@~5.6.0 react-native-screens@~4.16.0 react-native-web@^0.21.0 react-redux@^9.2.0
```

## Dependencies

### Core

| Package      | Version |
| ------------ | ------- |
| react        | 19.1.0  |
| react-native | 0.81.5  |
| expo         | 54.0.20 |

### Navigation

| Package                        | Version |
| ------------------------------ | ------- |
| @react-navigation/native       | ^6.1.18 |
| @react-navigation/native-stack | ^6.11.0 |
| react-native-screens           | ~4.16.0 |
| react-native-safe-area-context | ~5.6.0  |
| react-native-gesture-handler   | ~2.28.0 |

### State Management

| Package          | Version |
| ---------------- | ------- |
| @reduxjs/toolkit | ^2.11.0 |
| react-redux      | ^9.2.0  |

### UI & Utilities

| Package            | Version |
| ------------------ | ------- |
| @expo/vector-icons | ^15.0.3 |
| expo-font          | ^14.0.9 |
| expo-status-bar    | ~3.0.8  |

### Web Support

| Package               | Version |
| --------------------- | ------- |
| react-dom             | 19.1.0  |
| react-native-web      | ^0.21.0 |
| inline-style-prefixer | ^6.0.0  |

## Running the App

Start the development server:

```bash
npm start
```

Run on specific platform:

```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## Project Structure

```
EcommerceApp/
├── App.js                 # App entry point
├── index.js               # Root file
├── package.json           # Dependencies
├── assets/                # Static assets
└── src/
    ├── Components/        # Reusable components
    │   └── CartListItem.js
    ├── data/              # Static data
    │   ├── cart.js
    │   └── products.js
    ├── navigation/        # Navigation setup
    │   └── Navigation.js
    ├── screens/           # App screens
    │   ├── ProductScreen.js
    │   ├── ProductDetailsScreen.js
    │   ├── ShoppingCart.js
    │   └── ShoppingCartScreen.js
    └── store/             # Redux store
        ├── index.js
        └── productSlice.js
```
