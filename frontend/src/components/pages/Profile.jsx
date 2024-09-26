import Navbar from "../common/Navbar";
import { Avatar, AvatarImage } from "../ui/Avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import { Mail, Contact, Pen } from "lucide-react";
import AppliedJobTable from "../layout/profile/Appliedjobs";
import { useState , useEffect } from "react";
import Updateprofile from "../layout/profile/Updateprofile";
import { useUser } from "../../context/Usercontext";

function Profile() {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Perform any side effects related to user data
  }, [user]); // Trigger re-render when user changes
  

  return (
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
            {user?.profile?.skills?.length !== 0 ? (
              user?.profile?.skills?.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="my-5 flex flex-col gap-2">
          <Label>Resume</Label>
          <a
            href={user?.profile?.resume || "#"}
            download
            className="underline text-blue-500"
          >
            {user?.profile?.resume ? "Download Resume" : "No resume available"}
          </a>
        </div>
        <AppliedJobTable />
      </div>
      <Updateprofile open={open} setOpen={setOpen} />
    </div>
  );
}

export default Profile;
