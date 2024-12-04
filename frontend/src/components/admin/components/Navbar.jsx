import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListIcon from "@mui/icons-material/List";

function Navbar() {
  return (
    <div className="navbar h-[49.5px] border-b-2 border-gray-300">
      <div className="wrapper flex justify-between p-2">
        <div className="search flex items-center border-2 border-slate-400 rounded">
          <input
            type="text"
            placeholder="Search..."
            className="border-none p-0.5 outline-none bg-transparent text-[12px]"
          />
          <SearchIcon className="text-slate-600" />
        </div>
        <div className="items flex gap-6">
          <div className="item flex">
            <LanguageIcon className="text-slate-600" />
            <p className="font-semibold text-slate-400">English</p>
          </div>
          <div className="item">
            <BedtimeOutlinedIcon className="text-slate-600" />
          </div>
          <div className="item">
            <ZoomInMapOutlinedIcon className="text-slate-600" />
          </div>
          <div className="item flex relative">
            <NotificationsNoneOutlinedIcon className="text-slate-600" />
            <div className="counter w-[16px] h-[16px] rounded-full bg-green-600 text-[10px] font-bold text-white flex items-center justify-center absolute top-0 left-3">1</div>
          </div>
          <div className="item flex relative">
            <ChatBubbleOutlineOutlinedIcon className="text-slate-600" />
            <div className="counter w-[16px] h-[16px] rounded-full bg-green-600 text-[10px] font-bold text-white flex items-center justify-center absolute top-0 left-3">1</div>
          </div>
          <div className="item">
            <ListIcon className="text-slate-600" />
          </div>
          <div className="item w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
              alt=""
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
