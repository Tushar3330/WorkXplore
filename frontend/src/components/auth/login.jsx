import Navbar from "../layout/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const eventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center max-w-5xl mx-auto">
          <form
            className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
            onSubmit={submithandler}
          >
            <h1 className="font-bold text-xl mb-5 text-center">Login</h1>

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

            <Button type="submit" className="w-full my-4">
              Login
            </Button>

            <span className="text-sm">
              Forgot Password?{" "}
              <Link to="/forgot-password" className="text-blue-600">
                Click here
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
