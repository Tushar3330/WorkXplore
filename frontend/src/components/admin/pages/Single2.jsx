import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserChart from '../components/UserChart'
import TableList from '../components/TableList'
import { ADMIN_API_END_POINT } from "./../utils/constant";
import TableList2 from '../components/TableList2';

function Single2() {
  const { recruiterId } = useParams(); // Extract userId from route params
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${ADMIN_API_END_POINT}/users`); // Fetch all users
        console.log(response);
        const userData = response.data.recruiters.find(user => user._id === recruiterId); // Filter user by ID
        console.log(userData);
        setUser(userData || null); // Set user or null if not found
        console.log(user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [recruiterId]); // Dependency array with userId

  if (loading) {
    return <p className='shadow-xl rounded-md'>Loading...</p>;
  }

  if (!user) {
    return <p className='shadow-xl rounded-md'>User not found!</p>;
  }
  return (
    <div className='single'>
        <div className="top flex justify-around mt-5 mb-10">
          <div className="left w-[35%] p-2 shadow-xl rounded-md h-[20rem]">
            <div className="title text-3xl m-2 font-bold mb-8">Information</div>
            <div className="item flex gap-6">
              <img className='w-[150px] h-[150px] rounded-full object-cover mt-3' src={user.profile?.profilePhoto} alt="" />
              <div className="details">
                <div className="itemTitle text-2xl font-semibold mb-4">{user.fullname}</div>
                <div className="detailItem flex gap-2 text-sm">
                  <span className='key font-bold'>Email:</span>
                  <span className='value'>{user.email}</span>
                </div>
                <div className="detailItem flex gap-2 text-sm">
                  <span className='key font-bold'>Phone:</span>
                  <span className='value'>91+ {user.phoneNumber}</span>
                </div>
                <div className="detailItem flex gap-2 text-sm">
                  <span className='key font-bold'>Role:</span>
                  <span className='value'>{user.role}</span>
                </div>
                <div className="detailItem flex gap-2 text-sm">
                  <span className='key font-bold'>Country:</span>
                  <span className='value'>India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-[45%] p-2 shadow-xl rounded-md h-[20rem]">
            <UserChart/>
          </div>
        </div>
        <div className="bottom shadow-xl rounded-md m-12">
         <TableList2 id={user._id}/>
        </div>
    </div>
  )
}

export default Single2
