import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    company: 'Google',
    A: 90,
  },
  {
    company: 'Microsoft',
    A: 98,
  },
  {
    company: 'Uber',
    A: 86,
  },
  {
    company: 'Swiggy',
    A: 99,
  },
  {
    company: 'Paytm',
    A: 85,
  },
  {
    company: 'Meta',
    A: 120,
  },
];
function PiechartRecruiter() {
  return (
    <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="company" />
          <PolarRadiusAxis />
          <Radar name="Student" dataKey="A" stroke="#004d00" fill="#80ff80" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  )
}

export default PiechartRecruiter
