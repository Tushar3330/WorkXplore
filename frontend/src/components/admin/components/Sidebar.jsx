import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import BusinessIcon from '@mui/icons-material/Business';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PieChartIcon from '@mui/icons-material/PieChart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar w-[20%]  border-r-2 border-gray-300 min-h-screen">
      <div className="top m-2 flex justify-center">
        
        <span  className="logo text-2xl font-bold text-zinc-600"> <Link to="/">WorkXplore</Link></span>
      </div>
      <hr className="border w-full border-gray-300 mb-2"/>
      <div className="center">
        <ul className="ml-2 flex flex-col gap-2">
          <p className="title text-[13px] font-semibold text-zinc-400 mt-1">MAIN</p>
          <li className="w-fit flex justify-center cursor-pointer">
            <DashboardIcon className="text-purple-500"/>
            <Link to={"/adminpanel"} className="text-slate-500 font-semibold">Dashboard</Link>
          </li>
          <p className="title text-[13px] font-semibold text-zinc-400 mt-1">LISTS</p>
          <li className="w-fit flex justify-center cursor-pointer">
            <PersonOutlineIcon className="text-purple-500"/>
            <Link to={"/adminpanel/users"} className="text-slate-500 font-semibold">Users</Link>
          </li>
          <li className="w-fit flex justify-center cursor-pointer">
            <BusinessIcon className="text-purple-500"/>
            <Link to={"/adminpanel/recruiters"} className="text-slate-500 font-semibold">Recruiters</Link>
          </li>
          <li className="w-fit flex justify-center cursor-pointer">
            <WorkOutlineIcon className="text-purple-500"/>
            <Link to={"/adminpanel/posts"} className="text-slate-500 font-semibold">Posts</Link>
          </li>
          <p className="title text-[13px] font-semibold text-zinc-400 mt-1">USEFUL</p>
          <li className="w-fit flex justify-center cursor-pointer">
            <PieChartIcon className="text-purple-500"/>
            <Link to={"/adminpanel/charts"} className="text-slate-500 font-semibold">Charts</Link>
          </li>
          <li className="w-fit flex justify-center cursor-pointer">
            <BarChartOutlinedIcon className="text-purple-500"/>
            <Link to={"/adminpanel/stats"} className="text-slate-500 font-semibold">Stats</Link>
          </li>
          <p className="title text-[13px] font-semibold text-zinc-400 mt-1">SERVICE</p>
          <li className="w-fit flex justify-center cursor-pointer">
            <SupportAgentIcon className="text-purple-500"/>
            <span className="text-slate-500 font-semibold">Support</span>
          </li>
          <li className="w-fit flex justify-center cursor-pointer">
            <TextsmsIcon className="text-purple-500"/>
            <span className="text-slate-500 font-semibold">Feedbacks</span>
          </li>
          <li className="w-fit flex justify-center cursor-pointer">
            <PsychologyIcon className="text-purple-500"/>
            <span className="text-slate-500 font-semibold">Logs</span>
          </li>
          <p className="title text-[13px] font-semibold text-zinc-400 mt-1">USER</p>
          <li className="w-fit flex justify-center cursor-pointer">
            <SettingsIcon className="text-purple-500"/>
            <span className="text-slate-500 font-semibold">Settings</span>
          </li>
          <li className="w-fit flex justify-center cursor-pointer">
            <AccountCircleOutlinedIcon className="text-purple-500"/>
            <span className="text-slate-500 font-semibold">Profile</span>
          </li>
          <li className="w-fit flex justify-center cursor-pointer">
            <LogoutIcon className="text-purple-500"/>
            <span className="text-slate-500 font-semibold">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom flex m-5 gap-2">
        <div className="coloOptions w-[25px] h-[25px] rounded-md border-[2px] border-purple-500 bg-white cursor-pointer"></div>
        <div className="coloOptions w-[25px] h-[25px] rounded-md border-[2px] border-purple-500 bg-black cursor-pointer"></div>
      </div>
    </div> 
  );
}

export default Sidebar;
