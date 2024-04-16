import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/theme/ThemeContext.jsx'
import { WeatherProvider } from './context/weather/WeatherContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider>
  <WeatherProvider>
  <App />
  </WeatherProvider>
   </ThemeProvider>
  </React.StrictMode>,
)
