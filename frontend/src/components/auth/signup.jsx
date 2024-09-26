import Navbar from "../common/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/Usercontext";

function Signup() {
  const{user} = useUser();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "", // profile should be initialized as null or an empty value
  });

  const eventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const filehandler = (e) => {
    // Correctly handling file input, using e.target.files
    setInput({ ...input, file: e.target.files[0] });
  };

  // for handling the form submission
  const submithandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
  }

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
      console.log(error);
    }
  };
  useEffect(()=>{
    if(user){
        navigate("/");
    }
},[])


  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <form
            className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
            onSubmit={submithandler}
          >
            <h1 className="font-bold text-xl mb-5 text-center">Sign Up</h1>
            <div className="my-2">
              <Label>Full Name</Label>
              <Input
                className={"mt-1"}
                type="text"
                name="fullname"
                value={input.fullname}
                onChange={eventhandler}
                placeholder="Enter fullname"
              />
            </div>
            <div className="my-2">
              <Label>Email</Label>
              <Input
                className={"mt-1"}
                type="email"
                name="email"
                value={input.email}
                onChange={eventhandler}
                placeholder="Enter email"
              />
            </div>
            <div className="my-2">
              <Label>Phone Number</Label>
              <Input
                className={"mt-1"}
                type="text"
                name="phoneNumber"
                value={input.phoneNumber}
                onChange={eventhandler}
                placeholder="Enter Phone no."
              />
            </div>
            <div className="my-2">
              <Label>Password</Label>
              <Input
                className={"mt-1"}
                type="password"
                name="password"
                value={input.password}
                onChange={eventhandler}
                placeholder="Enter password"
              />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={eventhandler}
                    className="cursor-pointer mt-1"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={eventhandler}
                    className="cursor-pointer mt-1"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
              <div className="flex items-center gap-2">
                <Label>Profile </Label>
                <Input
                  accept="image/*"
                  type="file"
                  onChange={filehandler}
                  className="cursor-pointer mt-1"
                />
              </div>
            </div>

            <Button type="submit" className="w-full my-4">
              Signup
            </Button>

            <span className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
