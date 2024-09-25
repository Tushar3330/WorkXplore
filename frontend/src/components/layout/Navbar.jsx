/* eslint-disable no-unused-vars */
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
// Assuming you're using React Router

function Navbar() {
  const user = false; // Example, replace with actual user state
  const classlinks = ["Home", "Jobs", "Browse"];

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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.491027 5.74153C1.14573 5.12319 2.20721 5.1232 2.86191 5.74153L14.0384 16.2971C14.6931 16.9154 14.6931 17.9179 14.0384 18.5363C13.3837 19.1546 12.3222 19.1546 11.6675 18.5363L0.491027 7.9807C-0.163676 7.36237 -0.163676 6.35985 0.491027 5.74153Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.45464e-07 1.58333C1.45464e-07 0.708882 0.750582 0 1.67647 0H12.8529C13.7788 0 14.5294 0.708882 14.5294 1.58333C14.5294 2.45778 13.7788 3.16667 12.8529 3.16667H1.67647C0.750582 3.16667 1.45464e-07 2.45778 1.45464e-07 1.58333Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.35294 8.44444L3.35294 17.4167C3.35294 18.2911 2.60236 19 1.67647 19C0.750583 19 1.04529e-06 18.2911 1.00482e-06 17.4167L1.1658e-07 6.86111C9.71445e-08 6.44119 0.176628 6.03846 0.491027 5.74153C0.805426 5.44459 1.23184 5.27778 1.67647 5.27778L12.8529 5.27778C13.7788 5.27778 14.5294 5.98666 14.5294 6.86111C14.5294 7.73556 13.7788 8.44444 12.8529 8.44444L3.35294 8.44444Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="text-3xl pl-2 font-bold">Work Xplore</div>
      </div>

      {/* Links and User Section */}
      <div className="flex items-center space-x-10">
        {/* Navigation Links */}
        {classlinks.map((link, index) => (
          <Link
            key={index}
            href="#"
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
        ))}

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
                  src="https://github.com/shadcn.png"
                  alt="shadcui"
                />
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className={"w-[18rem]"}>
              <div className="flex gap-7">
                <Avatar className={"cursor-pointer mt-1"}>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="shadcui"
                  />
                </Avatar>
                <div>
                  <h1 className="font-medium">Welcome Tushar</h1>
                  <p className="text-sm text-muted-foreground">
                    I am a frontend developer
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start mt-5">
                <div className="flex w-fit items-center gap-3 cursor-pointer">
                  <User2 />
                  <Button variant="link">View Profile</Button>
                </div>
                <div className="flex w-fit items-center gap-3 cursor-pointer">
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
