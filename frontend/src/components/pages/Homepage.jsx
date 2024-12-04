/* eslint-disable no-unused-vars */
import { React, useEffect } from "react";
import Navbar from "../common/Navbar";
import Herosection from "../layout/home/Herosection";
import CategoryCatalouge from "../layout/home/CategoryCatalouge";
import Latestjobs from "../layout/home/Latestjobs";
import Footer from "../common/Footer";
import useGetAllJobs from "../../hooks/usegetalljobs";
import { setSearchedQuery } from "@/redux/jobslice";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import RecentJobsPosted from "../layout/home/RecentJobsPosted";
import CompanyCatalouge from "../layout/home/CompanyCatalouge";


function Homepage() {
  useGetAllJobs();

  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <Herosection></Herosection>

      {user && user.role === "recruiter" ? (
        <>
         <CompanyCatalouge></CompanyCatalouge>
          <RecentJobsPosted></RecentJobsPosted>
        </>
      ) : (
        <>
       
          <CategoryCatalouge></CategoryCatalouge>
          <Latestjobs></Latestjobs>
        </>
      )}

      <Footer></Footer>
    </>
  );
}

export default Homepage;
