import React from 'react'
import HeroSection from '../components/HeroSection'
import trainer from '../assets/cropped_image.png'
import Services from './Services'
import Clients from './Clients'
const Home = () => {
  return (
    <>
    <HeroSection name="Shape Your Body" subtitle="Work Out With Experienced Personal Trainer." image={trainer}/>
<Services/>
<HeroSection name="About Us" subtitle="Empowered Transformation: Your Path Ahead With our programs,
       we don't just address the symptoms; we transform your lifestyle.
        You'll reclaim your vitality through personalised coaching,
       shedding 8-15kg in just 12 weeks. No need to give up your favourite indulgences;
      we'll work with them." image={trainer}/>
<Clients/>
</>
  )
}

export default Home
