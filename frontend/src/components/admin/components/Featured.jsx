/* eslint-disable react/prop-types */
import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function Featured({users, recruiters}) {
  return (
    <div className='featured w-[20rem] p-1 shadow-xl rounded-md h-auto'>
      <div className="top flex justify-between">
         <h1 className="title font-bold text-sm text-zinc-600">TOTAL TRAFFIC</h1>
         <MoreVertOutlinedIcon className='text-sm text-zinc-600'/>
      </div>
      <div className="bottom flex flex-col justify-center items-center gap-4">
       <div className="featuredChart w-[100px] h-[100px]">
        <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
       </div>
       <p className="title font-bold  text-zinc-600">Total users registered today</p>
       <p className="amount text-3xl">{users.length + recruiters.length}</p>
       <p className="description text-center font-sm font-medium  text-zinc-500">Traffic on our website is less because our website is new in the market.</p>
       <div className="summary w-[100%] flex justify-between">
        <div className="item flex flex-col items-center">
            <div className="itemTitle font-bold text-[14px]  text-zinc-500">Target</div>
            <div className="itemResult flex items-center justify-center">
                <KeyboardArrowUpIcon/>
                <div className="resultAmount font-bold text-red-500  text-zinc-700">120 </div>
            </div>
        </div>
        <div className="item flex flex-col items-center">
            <div className="itemTitle font-bold text-[14px]  text-zinc-500">Last Week</div>
            <div className="itemResult flex items-center justify-center">
                <KeyboardArrowUpIcon/>
                <div className="resultAmount font-bold  text-zinc-700">8 </div>
            </div>
        </div>
        <div className="item flex flex-col items-center">
            <div className="itemTitle font-bold text-[14px]  text-zinc-500">Last Month</div>
            <div className="itemResult flex items-center justify-center">
                <KeyboardArrowUpIcon/>
                <div className="resultAmount font-bold  text-zinc-700">100 </div>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Featured