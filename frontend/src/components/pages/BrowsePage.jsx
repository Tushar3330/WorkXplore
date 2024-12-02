import { useEffect, useState } from 'react';
import Navbar from '../common/Navbar';
import Job from '../layout/jobs/Jobcard';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

const Browse = () => {
    useGetAllJobs();
    const { allJobs   } = useSelector(store => store.job);
    const dispatch = useDispatch(

    );
    
    const [query, setQuery] = useState(''); // State for storing search query

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, []);

    const filteredJobs = allJobs.filter(job =>
        job.title.toLowerCase().includes(query.toLowerCase() 

    ))
    

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                {/* Search Bar */}
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto my-6'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} // Update the search query
                        className='outline-none border-none w-full'
                    />
                    <Button className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>

                <h1 className='font-bold text-xl my-10'>Search Results ({filteredJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {filteredJobs.map((job) => (
                        <Job key={job._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Browse;
