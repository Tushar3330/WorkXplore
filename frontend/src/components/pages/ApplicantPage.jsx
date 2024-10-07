import { useEffect } from 'react'
import Navbar from '../common/Navbar'
import ApplicantsTable from '../layout/applicants/ApplicantsTable'
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '../../utils/constant';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllApplicants } from '../../redux/applicationslice';



const ApplicantPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {applicants } = useSelector(store=>store.application);

    useEffect(() => {
        const fetchAllApplicantPage = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true });
                dispatch(setAllApplicants(res.data.job));
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicantPage();
    }, []);
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Applicants {applicants ?.applications?.length}</h1>
                <ApplicantsTable />
            </div>
        </div>
    )
}

export default ApplicantPage