import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComp from './Components/HeaderComp.jsx'
import CompInfo from './Data/CompInfo.js'
import About from './Components/About.jsx'
import Address from './Components/Address.jsx'
import Drinks from './Components/Drinks.jsx'
import DrinkData from './Data/DrinkData.js'

function App() {
  let drinks = DrinkData.map(drink => {
    return (
      <Drinks 
        drink={drink}
      />
    )
  })
  return (
    <div>
      <HeaderComp 
        compName={CompInfo.compName}
        compImg={CompInfo.compImg}
        slogan={CompInfo.slogan}
      />
      <h2 className="drinkLayout alienText">Our Drinks</h2>
      <div className="drinkLayout">
        {drinks}
      </div>
      
      <About 
        about={CompInfo.about}
      />
      <Address 
        compName={CompInfo.compName}
        address={CompInfo.address}
        city={CompInfo.city}
        state={CompInfo.state}
        zip={CompInfo.zip}
        phone={CompInfo.phone}
        building={CompInfo.building}
      />
    </div>
    
  )
}

export default App
