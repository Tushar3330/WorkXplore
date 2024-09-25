/* eslint-disable no-unused-vars */
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "@/context/Usercontext";

function Navbar() {
  const { user, logout } = useUser(); // Manage user state (null for logged out, user object for logged in)
  const classlinks = ["Home", "Jobs", "Browse"];
  const recruiterlink = ["Home", "Post Job"];

  const handleLogout = () => {
    logout(); 
    // Optionally, you can add more logic here, like redirecting to a login page.
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <svg
          width="23"
          height="23"
          viewBox="0 0 15 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content here */}
        </svg>
        <div className="text-3xl pl-2 font-bold">Work Xplore</div>
      </div>

      {/* Links and User Section */}
      <div className="flex items-center space-x-10">
        {/* Navigation Links */}
        {user && user.role === "recruiter" ? (
          recruiterlink.map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase()}`}
              className="text-md flex gap-1 items-center text-zinc-700 font-semibold hover:text-blue-500 transition"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00FF19" }}
                  className="inline-block h-1 w-1 rounded-full bg-green-500"
                ></span>
              )}
              {link}
            </Link>
          ))
        ) : (
          classlinks.map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase()}`}
              className="text-md flex gap-1 items-center text-zinc-700 font-semibold hover:text-blue-500 transition"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00FF19" }}
                  className="inline-block h-1 w-1 rounded-full bg-green-500"
                ></span>
              )}
              {link}
            </Link>
          ))
        )}

        {/* Authentication Section */}
        {!user ? (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-zinc-800 hover:bg-zinc-950">Signup</Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className={"cursor-pointer"}>
                <AvatarImage
                  src="https://github.com/shadcn.png" // Replace with actual user avatar
                  alt="User Avatar"
                />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className={"w-[18rem]"}>
              <div className="flex gap-7">
                <Avatar className={"cursor-pointer mt-1"}>
                  <AvatarImage
                    src="https://github.com/shadcn.png" 
                    alt="User Avatar"
                  />
                </Avatar>
                <div>
                  <h1 className="font-medium">Welcome {user.name}</h1>
                  <p className="text-sm text-muted-foreground">
                    I am a {user.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start mt-5">
                <div className="flex w-fit items-center gap-3 cursor-pointer">
                  <User2 />
                  <Link to="/profile">
                    <Button variant="link">View Profile</Button>
                  </Link>
                </div>
                <div className="flex w-fit items-center gap-3 cursor-pointer" onClick={handleLogout}>
                  <LogOut />
                  <Button variant="link">Logout</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
}

export default Navbar;
