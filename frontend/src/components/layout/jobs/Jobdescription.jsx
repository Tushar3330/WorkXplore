import { Badge } from "../../ui/badge";
import Navbar from "../../common/Navbar";
import { Button } from "../../ui/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from "../../utils/constant";
import { useJob } from "@/context/JobContext";
import { useUser } from "@/context/Usercontext";
import { toast } from 'sonner';

function JobDescription() {
  const { singleJob, setSingleJob } = useJob();
  const { user } = useUser();
  const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const params = useParams();
  const jobId = params.id;

  const applyJobHandler = async () => {
    try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
        
        if(res.data.success){
            setIsApplied(true); // Update the local state
            const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
            setSingleJob(updatedSingleJob); // Update the context state
            toast.success(res.data.message);

        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }
}

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        if (res.data.success) {
          setSingleJob(res.data.job); // Use setSingleJob from JobContext
          // Check if the user has already applied for the job
          setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleJob();
  }, [jobId, setSingleJob, user?._id]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">{singleJob?.title}</h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                {singleJob?.position} Positions
              </Badge>
              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                {singleJob?.jobType}
              </Badge>
              <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
                {singleJob?.salary} LPA
              </Badge>
            </div>
          </div>
          
          <Button
            onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
            className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
            {isApplied ? 'Already Applied' : 'Apply Now'}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role: <span className="pl-4 font-normal text-gray-800">{singleJob?.title}</span>
          </h1>
          <h1 className="font-bold my-1">
            Location: <span className="pl-4 font-normal text-gray-800">{singleJob?.location}</span>
          </h1>
          <h1 className="font-bold my-1">
            Description: <span className="pl-4 font-normal text-gray-800">{singleJob?.description}</span>
          </h1>
          <h1 className="font-bold my-1">
            Experience: <span className="pl-4 font-normal text-gray-800">{singleJob?.experience} yrs</span>
          </h1>
          <h1 className="font-bold my-1">
            Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary} LPA</span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span>
          </h1>
          <h1 className="font-bold my-1">
            Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split("T")[0]}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
