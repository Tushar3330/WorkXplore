import Navbar from "../common/Navbar"
import Job from "../layout/jobs/Jobcard"

const allJobs = [1,2,3,4,5,6,7,8,9,10]
function Browse() {
  return (
    <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
  )
}

export default Browse