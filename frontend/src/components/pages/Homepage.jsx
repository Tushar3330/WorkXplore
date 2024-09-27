/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../common/Navbar'
import Herosection from '../layout/home/Herosection'
import CategoryCatalouge from '../layout/home/CategoryCatalouge'
import Latestjobs from '../layout/home/Latestjobs'
import Footer from '../common/Footer'
import useGetAllJobs from '../../hooks/usegetalljobs'

function Homepage() {

  useGetAllJobs()
   
        
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