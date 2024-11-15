import React from 'react'
import SearchBar from './components/practice/SearchBar'
import Card from './components/practice/Card'
import Theme from './components/themes/Theme'
import { ThemeProvider } from './providers/ThemeProvider'
import Shop from './components/cart/Shop'
import { CartProvider } from './providers/CartProvider'
import Stopwatch from './components/practice/Stopwatch'

function App() {
  return (
    <div>
      {/* <Card /> */}
      <Stopwatch />
      {/* <CartProvider>
        <Shop />
      </CartProvider> */}
    </div >
  )
}

export default App
