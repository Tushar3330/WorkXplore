/* eslint-disable no-unused-vars */
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import Navbar from "../../common/navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "../../../utils/constant";
import { toast } from "sonner";
import { useState } from "react";
import { setSingleCompany } from "@/redux/companyslice";
import { useDispatch } from "react-redux";

function CompanyCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState();

  const registerNewcompany = async () => {
    try {
        const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {companyName}, {
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        });
        if(res?.data?.success){
            dispatch(setSingleCompany(res.data.company));
            toast.success(res.data.message);
            const companyId = res?.data?.company?._id;
            navigate(`/recruiter/companies/${companyId}`);
        }
    } catch (error) {
         toast.error(error.response.data.message);
        console.log(error);
    }
    }


  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? you can change this
            later.
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="JobHunt, Microsoft etc."
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/recruiter/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registerNewcompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default CompanyCreate;
