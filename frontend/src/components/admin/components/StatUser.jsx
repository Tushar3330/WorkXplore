import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      field: 'Backend Dev',
      Students: 120,
    },
    {
      field: 'Frontend Dev',
      Students: 78,
    },
    {
      field: 'Full Stack',
      Students: 60,
    },
    {
      field: 'UI Designer',
      Students: 99,
    },
    {
      field: 'Data Scientist',
      Students: 85,
    },
    {
      field: 'Tester',
      Students: 65,
    },
  ];


function StatUser() {
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
      <XAxis dataKey="field" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="Students" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
  )
}

export default StatUser
