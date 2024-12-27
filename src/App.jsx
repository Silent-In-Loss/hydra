import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Contacts from './components/Contacts/Contacts'
import Intruduction from './components/Introduction/Intruduction'
import Tarifs from './components/Tarifs/Tarifs'
import Used from './components/Used/Used'
import Level from './components/Level/Level'
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer'
import Lazer from './Lazer/Lazer'


const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Contacts/>
      <Lazer/>
      <Intruduction/>
      <Tarifs/>
      <Used/>
      <Level/>
      <Join/>
      <Footer/>
    </>
  )
}

export default App