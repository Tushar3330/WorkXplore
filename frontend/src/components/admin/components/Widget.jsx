import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widget({type, amount}) {
  let data;
// temporary
   const diff = 20;


  switch(type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineIcon className="p-1 text-red-950  bg-red-300 rounded self-end"/> 
      };
      break;
      case "orders":
        data = {
          title: "RECRUITERS",
          isMoney: false,
          link: "View all recruiters",
          icon: <ShoppingCartOutlinedIcon className="p-1 text-yellow-600  bg-yellow-200 rounded self-end"/>,
        };
        break;
        case "earning":
          data = {
          title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnOutlinedIcon className="p-1 text-green-950  bg-green-200 rounded self-end"/> 
          };
          break;
          case "balance":
            data = {
              title: "BALANCE",
              isMoney: true,
              link: "View balance",
              icon: <AccountBalanceWalletOutlinedIcon className='text-purple-950 bg-purple-300 rounded self-end p-1'/> 
            };
            break;
    default: 
    break;
  }
  return (
    <div className='flex justify-between w-[15rem] p-1 shadow-xl rounded-md h-[8rem]'>
      <div className="left flex flex-col justify-between">
        <span className="title font-bold text-sm text-zinc-600">{data.title}</span>
        <span className="counter text-3xl font-medium">{data.isMoney && "$"}{amount}</span>
        <span className="link text-sm border-b-2 border-zinc-400 text-neutral-600">{data.link}</span>
      </div>
      <div className="right flex flex-col justify-between items-center">
        <div className="percentage flex">
          <KeyboardArrowUpIcon/>
          <span className="number text-green-700 text-sm">{diff}%</span>
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
