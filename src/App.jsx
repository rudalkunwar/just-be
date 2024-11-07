import React from 'react'
import SearchBar from './components/practice/SearchBar'
import Theme from './components/themes/Theme'
import { ThemeProvider } from './providers/ThemeProvider'
import Shop from './components/cart/Shop'
import { CartProvider } from './providers/CartProvider'

function App() {
  return (
    <div>
      <CartProvider>
        <Shop />
      </CartProvider>
    </div >
  )
}

export default App
