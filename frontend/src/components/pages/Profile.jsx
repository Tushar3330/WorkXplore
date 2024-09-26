import Navbar from "../common/Navbar";
import { Avatar, AvatarImage } from "../ui/Avatar";
// import { useUser } from "@/context/Usercontext";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import { Mail, Contact, Pen } from "lucide-react";
import AppliedJobTable from "../layout/profile/Appliedjobs";
import { useState } from "react";
import Updateprofile from "../layout/profile/Updateprofile";

function Profile() {
  //dummy data for user

  const user = {
    fullname: "Tushar",
    email: "absd@gmail.com",
    phoneNumber: "1234567890",
    profile: {
      bio: "I am a software developer",
      skills: ["React", "Node", "MongoDB"],
      resume: "https://www.google.com",
    },
  };

  const isResume = true;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <Navbar />
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                  alt="profile"
                />
              </Avatar>
              <div>
                <h1 className="font-medium text-xl">{user?.fullname}</h1>
                <p>{user?.profile?.bio}</p>
              </div>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="text-right"
              variant="outline"
            >
              <Pen />
            </Button>
          </div>
          <div className="my-5">
            <div className="flex items-center gap-3 my-2">
              <Mail />
              <span>{user?.email}</span>
            </div>
            <div className="flex items-center gap-3 my-2">
              <Contact />
              <span>{user?.phoneNumber}</span>
            </div>
          </div>
          <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1">
              {user?.profile?.skills.length !== 0 ? (
                user?.profile?.skills.map((item, index) => (
                  <Badge key={index}>{item}</Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {isResume ? (
              <a
                target="blank"
                href={user?.profile?.resume}
                className="text-blue-500 w-full hover:underline cursor-pointer"
              >
                Tushar
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          <AppliedJobTable></AppliedJobTable>
        </div>

        {/* opening update or edit profile diaLOUGE WHEN CLICKED ON EDIT BUTTON as open is true */}
        <Updateprofile open={open } setOpen={setOpen}></Updateprofile>


      </div>
    </div>
  );
}

export default Profile;
