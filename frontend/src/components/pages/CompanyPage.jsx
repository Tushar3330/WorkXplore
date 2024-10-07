
import Navbar from '../common/navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from '../layout/Company/CompanyJobsTable'
import { useNavigate } from 'react-router-dom'
// import useGetAllCompanies from '../../hooks/useGetAllJobs'
// import { useDispatch } from 'react-redux'
// import { setSearchCompanyByText } from '@/redux/companySlice'

function Companies() {
    // const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-5'>
                    <Input
                        className="w-fit"
                        placeholder="Filter by name"
                     
                    />
                    <Button onClick={() => navigate("/recruiter/companies/create")}>New Company</Button>
                </div>
                <CompaniesTable/>
            </div>
        </div>
    )
}

export default Companies