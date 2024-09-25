/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className='w-fit px-4 py-3 mt-1 bg-zinc-100 text-black rounded-full flex  item-center justify-between'>
<span className='text-sm font-medium'>{title}</span>
<IoIosReturnRight className='text-2xl ' />


    </div>
  )
}

export default Button