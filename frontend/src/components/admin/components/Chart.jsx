/* eslint-disable react/prop-types */
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Chart({users, recruiters}) {
  const data = [
    {
      name: 'January',
      users: 0,
      recruiters:0,
    },
    {
      name: 'February',
      users: 0,
      recruiters:0,
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
    <div className='chart w-full p-1 shadow-xl rounded-md'>
   <h1 className="title font-bold text-sm text-zinc-600">CHART</h1>
      <ResponsiveContainer width="100%" height={400}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="recruiters" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart