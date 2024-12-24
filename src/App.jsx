import React from 'react'
import Header from './components/nav/Header'
import Home from './pages/Home'
import Footer from './components/nav/Footer'

function App() {
  return (
    <div className='bg-gray-900'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App