import React from 'react'
import Header from './components/nav/Header'
import Home from './pages/Home'
import Footer from './components/nav/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import { ToastContainer } from 'react-toastify'

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
        <ToastContainer />
      </ThemeProvider>
    </div>
  )
}

export default App