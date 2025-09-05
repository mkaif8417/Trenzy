import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from "../Context/LatestCollection";
import BestCeller from '../Components/BestCeller';
import OurPolicy from '../Components/OurPolicy';
import NewsletterBox from '../Components/NewsletterBox';




const Home = () => {
  return (
    <div>
   <Hero/>
   <LatestCollection/>
   <BestCeller/>
   <OurPolicy/>
   
    </div>
  )
}

export default Home
