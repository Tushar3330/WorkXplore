import React, { useState, useEffect } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import { ADMIN_API_END_POINT } from "./../utils/constant";


function Barchart() {
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

  const data = [
    {
      name: 'January',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'February',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'March',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'April',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'May',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'June',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'July',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'August',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'September',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'October',
      users: 0,
      recruiters: 0,
    },
    {
      name: 'November',
      users: 0,
      recruiters: 0,
    },
   
    {
      name: 'December',
      users: users.length,
      recruiters: recruiters.length,
    },
    
  ];

  return (
    <ResponsiveContainer width="100%" height={250}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="recruiters" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="users" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default Barchart