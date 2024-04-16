import React from 'react'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import ThemeButton from './components/ThemeButton'
import Home from './pages/Home'
import { NewsProvider } from './context/news/NewsContext'

const App = () => {
  return (
    <NewsProvider>
      <Navbar/>
       <Home/>
      <ThemeButton/>
    </NewsProvider>
  )
}

export default App