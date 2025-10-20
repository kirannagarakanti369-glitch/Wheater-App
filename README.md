# 🌤️ Weather App

A clean, responsive weather application built with **Node.js**, **Express**, and **EJS** that provides real-time weather information based on geographic coordinates.

## 🛠️ Tech Stack

- **Frontend:** EJS, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **API:** OpenWeatherMap API

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed on your system
- OpenWeatherMap API key

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     OPENWEATHER_API_KEY=your_api_key_here
     PORT=3000
     ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🚀 Usage Examples

### 📍 Get Weather by Coordinates
- Enter latitude (e.g., `40.7128`)
- Enter longitude (e.g., `-74.0060`) 
- Click **Get Weather** → Displays current weather data

### 🌡️ View Weather Information
- Current temperature in Celsius
- Weather conditions with visual icons
- Feels-like temperature
- Humidity percentage
- Wind speed

## 🔄 Application Flow

1. **Frontend Form** → Collects latitude and longitude coordinates
2. **Express Route (POST)** → Processes coordinates and fetches weather data
3. **OpenWeatherMap API** → Retrieves real-time weather information
4. **EJS Template** → Renders weather data with beautiful UI
5. **Responsive Display** → Shows weather information across all devices

## 📁 Project Structure

```
Weather-App/
├── server.js
├── views/
│   └── index1.ejs
├── public/
│   └── (static files)
├── .env
├── .gitignore
└── package.json
```

<img width="1897" height="975" alt="Screenshot 2025-10-20 081101" src="https://github.com/user-attachments/assets/4aad6f50-5914-4d02-b03d-0a5d9a5d9b97" />


## 🔧 API Integration

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `https://api.openweathermap.org/data/2.5/weather` | Fetches weather data by coordinates |

## ✨ Features

- **📍 Coordinate-based Weather** - Get weather data by entering latitude and longitude
- **🌡️ Real-time Data** - Current temperature, feels-like temperature, humidity, and wind speed
- **🌈 Weather Conditions** - Visual icons showing sunny, cloudy, rainy, or stormy conditions
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🎨 Beautiful UI** - Modern gradient design with smooth animations

## 🌐 API Reference

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data.
