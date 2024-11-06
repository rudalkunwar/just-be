import React from 'react'
import SearchBar from './components/practice/SearchBar'
import Theme from './components/themes/Theme'
import { ThemeProvider } from './providers/ThemeProvider'

function App() {
  return (
    <div>
      {/* < SearchBar /> */}




      <ThemeProvider>
        <Theme />
      </ThemeProvider>


    </div >
  )
}

export default App
