import React, { useState, useEffect } from 'react'
import StatUser from '../components/StatUser'
import StatRecruiter from '../components/StatRecruiter'
import Chart from '../components/Chart'
import axios from "axios";
import { ADMIN_API_END_POINT } from "./../utils/constant";

function StatHolder() {
  const [users, setUsers] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data on component mount
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${ADMIN_API_END_POINT}/users`);
        console.log("API Response:", response.data);
        const students = response.data.students; // Assuming the response has the user data
        const recruites = response.data.recruiters; // Assuming the response has the user data
        console.log("API Response:", students);
        setUsers(students); // Update state with filtered data
        setRecruiters(recruites); // Update state with filtered data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div>
      <div className="top flex justify-between p-2">
        <div className="left shadow-xl rounded-md w-[48%] p-4">
          <h1 className="font-bold text-xl text-zinc-600">STUDENTS</h1>
          <StatUser users = {users} recruiters = {recruiters}/>
        </div>
        <div className="right shadow-xl rounded-md w-[48%] p-4">
          <h1 className="font-bold text-xl text-zinc-600">RECRUITERS</h1>
          <StatRecruiter users = {users} recruiters = {recruiters}/>
        </div>
      </div>
      <div className="bottom shadow-xl rounded-md p-4 m-1">
        <Chart users = {users} recruiters = {recruiters}/>
      </div>
    </div>
    </div>
  )
}

export default StatHolder