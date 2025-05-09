import React from 'react'
import Search from './components/search'
import { useState } from 'react'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')



  return (
    <main>



      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src='hero-img.png'  alt='hero img' />
          <h1>Find  <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />




      </div>

    </main>
  )
}

export default App