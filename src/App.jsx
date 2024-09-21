import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComp from './Components/HeaderComp.jsx'
import CompInfo from './CompInfo.js'
import About from './Components/About.jsx'
import Address from './Components/Address.jsx'

function App() {

  return (
    <div>
      <HeaderComp 
        compName={CompInfo.compName}
        compImg={CompInfo.compImg}
        slogan={CompInfo.slogan}
      />
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
