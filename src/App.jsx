import React from 'react'
import Header from './components/nav/Header'
import Home from './pages/Home'
import Footer from './components/nav/Footer'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App