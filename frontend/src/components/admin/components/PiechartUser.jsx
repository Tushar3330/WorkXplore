import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    field: 'Backend Dev',
    A: 120,
  },
  {
    field: 'Frontend Dev',
    A: 78,
  },
  {
    field: 'Full Stack',
    A: 60,
  },
  {
    field: 'UI Designer',
    A: 99,
  },
  {
    field: 'Data Scientist',
    A: 85,
  },
  {
    field: 'Tester',
    A: 65,
  },
];
function PiechartUser() {
  return (
    <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="field" />
          <PolarRadiusAxis />
          <Radar name="Student" dataKey="A" stroke="#e69900" fill="#ffdd99" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
  )
}

export default PiechartUser
