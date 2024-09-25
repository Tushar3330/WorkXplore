/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            wXplore
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-600"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Sitemaps</h4>
            {["Home", "Jobs", "Browse", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={`#${item}`}
                className="block mt-2 text-zinc-600"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              At Work Xplore, we connect job seekers with their dream careers.
              For inquiries, contact us at contact@workxplore.com. © 2024 Work
              Xplore. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
