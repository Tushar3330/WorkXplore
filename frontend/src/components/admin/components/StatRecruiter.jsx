import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      company: 'Google',
      Recruiters: 1,
    },
    {
      company: 'Microsoft',
      Recruiters: 1,
    },
    {
      company: 'Uber',
      Recruiters: 1,
    },
    {
      company: 'Swiggy',
      Recruiters: 1,
    },
    {
      company: 'Paytm',
      Recruiters: 1,
    },
    {
      company: 'Meta',
      Recruiters: 0,
    },
  ];


function StatRecruiter() {
  return (
    <ResponsiveContainer width="100%" height={200}>
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="company" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="Recruiters" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
  )
}

export default StatRecruiter