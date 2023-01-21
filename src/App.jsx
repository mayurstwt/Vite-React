import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Service from './components/Service'
import Testimonial from './components/Testimonial'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar/>
      <Hero/>
      <Products/>
      <Service/>
      <Testimonial/>
      <Location/>
      <Footer/>

    </>
  )
}

export default App
