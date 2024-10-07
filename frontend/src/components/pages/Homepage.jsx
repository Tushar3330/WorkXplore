/* eslint-disable no-unused-vars */
import {React , useEffect} from 'react'
import Navbar from '../common/Navbar'
import Herosection from '../layout/home/Herosection'
import CategoryCatalouge from '../layout/home/CategoryCatalouge'
import Latestjobs from '../layout/home/Latestjobs'
import Footer from '../common/Footer'
import useGetAllJobs from '../../hooks/usegetalljobs'
import { setSearchedQuery } from '@/redux/jobslice'
import { useDispatch } from 'react-redux'
import { useeffect } from 'react';

function Homepage() {

  useGetAllJobs()

  //set search query to empty string
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);
  
   
        
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