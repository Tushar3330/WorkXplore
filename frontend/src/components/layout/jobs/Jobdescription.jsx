import { useEffect, useState } from 'react';
import { Badge } from '../../ui/badge';
import { Button } from './../../ui/button';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '../../../utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import Navbar from '../../common/Navbar';

const JobDescription = () => {
    const { singleJob } = useSelector((store) => store.job);
    const { user } = useSelector((store) => store.auth);
    const allAppliedJobs = useSelector((store) => store.job.allAppliedJobs);
    const [isApplied, setIsApplied] = useState(false);
    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to handle applying for a job
    const applyJobHandler = async () => {
        // Step 1: Check if the user has already applied for 10 jobs
        if (allAppliedJobs.length >= 10) {
            // Redirect to /revenuehome if the user has applied to 10 jobs
            navigate('/revenuehome');
            return;
        }

        try {
            // Apply for the current job
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

            if (res.data.success) {
                // Update the local state and Redux state
                setIsApplied(true);
                const updatedSingleJob = {
                    ...singleJob,
                    applications: [...singleJob.applications, { applicant: user?._id }],
                };
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong.');
        }
    };

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    // Update the Redux state
                    dispatch(setSingleJob(res.data.job));

                    // Check if the user has applied for the job
                    const hasApplied = res.data.job.applications.some(
                        (application) => application.applicant === user?._id
                    );
                    setIsApplied(hasApplied);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    useEffect(() => {
        // Sync the `isApplied` state with Redux state on refresh
        const hasApplied = singleJob?.applications?.some(
            (application) => application.applicant === user?._id
        );
        setIsApplied(hasApplied);
    }, [singleJob, user?._id]);

    return (
        <>
            <Navbar />
            <div className="max-w-[75rem] mx-auto my-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-bold text-xl">{singleJob?.title}</h1>
                        <div className="flex items-center gap-2 mt-4">
                            <Badge className={'text-blue-700 font-bold'} variant="ghost">
                                {singleJob?.position} Positions
                            </Badge>
                            <Badge className={'text-[#F83002] font-bold'} variant="ghost">
                                {singleJob?.jobType}
                            </Badge>
                            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">
                                {singleJob?.salary}LPA
                            </Badge>
                        </div>
                    </div>
                    <Button
                        onClick={isApplied ? null : applyJobHandler}
                        disabled={isApplied}
                        className={`rounded-lg ${
                            isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'
                        }`}
                    >
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
                        Salary: <span className="pl-4 font-normal text-gray-800">{singleJob?.salary}LPA</span>
                    </h1>
                    <h1 className="font-bold my-1">
                        Total Applicants: <span className="pl-4 font-normal text-gray-800">{singleJob?.applications?.length}</span>
                    </h1>
                    <h1 className="font-bold my-1">
                        Posted Date: <span className="pl-4 font-normal text-gray-800">{singleJob?.createdAt.split('T')[0]}</span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default JobDescription;
