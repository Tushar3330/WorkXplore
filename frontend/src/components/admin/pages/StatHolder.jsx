import React from 'react'
import StatUser from '../components/StatUser'
import StatRecruiter from '../components/StatRecruiter'
import Chart from '../components/Chart'

function StatHolder() {
  return (
    <div>
      <div>
      <div className="top flex justify-between p-2">
        <div className="left shadow-xl rounded-md w-[48%] p-4">
          <h1 className="font-bold text-xl text-zinc-600">STUDENTS</h1>
          <StatUser/>
        </div>
        <div className="right shadow-xl rounded-md w-[48%] p-4">
          <h1 className="font-bold text-xl text-zinc-600">RECRUITERS</h1>
          <StatRecruiter/>
        </div>
      </div>
      <div className="bottom shadow-xl rounded-md p-4 m-1">
        <Chart/>
      </div>
    </div>
    </div>
  )
}

export default StatHolder
