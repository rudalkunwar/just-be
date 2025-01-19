import React from 'react'
import Header from './components/nav/Header'
import Home from './pages/Home'
import Footer from './components/nav/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'

function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Test />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App