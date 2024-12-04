import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'January',
      users: 4000,
      recruiters: 400,
    },
    {
      name: 'February',
      users: 5000,
      recruiters: 600,
    },
    {
      name: 'March',
      users: 5500,
      recruiters: 1000,
    },
    {
      name: 'April',
      users: 3000,
      recruiters: 900,
    },
    {
      name: 'May',
      users: 6000,
      recruiters: 1400,
    },
    {
      name: 'June',
      users: 4000,
      recruiters: 2400,
    },
    {
      name: 'July',
      users: 7000,
      recruiters: 3400,
    },
    {
      name: 'August',
      users: 5000,
      recruiters: 1400,
    },
    {
      name: 'September',
      users: 8000,
      recruiters: 2400,
    },
    {
      name: 'October',
      users: 7000,
      recruiters: 1500,
    },
   
    {
      name: 'November',
      users: 3000,
      recruiters: 800,
    },
    
  ];

function Barchart() {
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
