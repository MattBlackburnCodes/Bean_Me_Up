import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComp from './Components/HeaderComp.jsx'
import CompInfo from './Data/CompInfo.js'
import UserInfo from './Data/UserInfo.js'
import About from './Components/About.jsx'
import Address from './Components/Address.jsx'
import Drinks from './Components/Drinks.jsx'
import DrinkData from './Data/DrinkData.js'
import Testimonials from './Components/Testimonials.jsx'
import Pastries from './Components/Pastries.jsx'
import PastriesInfo from './Data/PastriesInfo.js'

function App() {
  let drinks = DrinkData.map(drink => {
    return (
      <Drinks 
        drink={drink}
      />
    )
  })

  let users = UserInfo.map(user => {
    return (
      <Testimonials 
        user={user}
      
      />
    )
  })

  let pastries = PastriesInfo.map(pastry => {
    return (
      <Pastries 
        pastry={pastry}
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
      <h2 className="foodLayout alienText">Our Pastries</h2>
      <div className="foodLayout">
        {pastries}
      </div>
      <About 
        about={CompInfo.about}
      />
      <h2 className="testLayoyut alienText">Testimonials</h2>
      <div className="testLayout">
        {users}
      </div>

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
