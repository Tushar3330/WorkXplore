
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { Badge } from '../../ui/badge'

const AppliedJobTable = () => {
    const allAppliedJobs = [{
        _id: "1",
        status: "pending",
        createdAt: "2021-09-12T00:00:00.000Z",
        job: {
            title: "Software Engineer",
            company: {
                name: "Google"
            }
        }

    }, {
        _id: "2",
        status: "pending",
        createdAt: "2021-09-12T00:00:00.000Z",
        job: {
            title: "Software Engineer",
            company: {
                name: "Google"
            }
        }

    },
    {
        _id: "3",
        status: "pending",
        createdAt: "2021-09-12T00:00:00.000Z",
        job: {
            title: "Software Engineer",
            company: {
                name: "Google"
            }
        }

    },
    {
        _id: "4",
        status: "pending",
        createdAt: "2021-09-12T00:00:00.000Z",
        job: {
            title: "Software Engineer",
            company: {
                name: "Google"
            }
        }

    },
    {
        _id: "5",
        status: "pending",
        createdAt: "2021-09-12T00:00:00.000Z",
        job: {
            title: "Software Engineer",
            company: {
                name: "Google"
            }
        }

    }
    ]
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow >
                        <TableHead className={"text-md font-semibold text-zinc-950"}>Date</TableHead>
                        <TableHead className={"text-md font-semibold text-zinc-950"}>Job Role</TableHead>
                        <TableHead className={"text-md font-semibold text-zinc-950"}>Company</TableHead>
                        <TableHead className="text-right text-md font-semibold text-zinc-950">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.length <= 0 ? <span>You have not applied any job yet.</span> : allAppliedJobs.map((appliedJob) => (
                            <TableRow key={appliedJob._id}>
                                <TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{appliedJob.job?.title}</TableCell>
                                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                                <TableCell className="text-right"><Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob.status === 'pending' ? 'bg-gray-700' : 'bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable
