/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../layout/Navbar'
import Herosection from '../layout//Herosection'
import CategoryCatalouge from '../layout/CategoryCatalouge'
import Latestjobs from '../layout/Latestjobs'
import Footer from '../layout/Footer'

function Homepage() {
  return (
   <>
   <Navbar />
   <Herosection></Herosection>
   <CategoryCatalouge></CategoryCatalouge>
   <Latestjobs></Latestjobs>
   <Footer></Footer>

   </>

  )
}

export default Homepage