
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { Avatar, AvatarImage } from '../../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'


const CompaniesTable = () => {
    
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="https://cdn3d.iconscout.com/3d/free/thumb/free-google-3d-icon-download-in-png-blend-fbx-gltf-file-formats--twitter-logo-social-media-pack-logos-icons-7516836.png?f=webp" alt="company" />
                            </Avatar>
                        </TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>2021-09-09</TableCell>
                        <TableCell className="text-right">
                            <Popover>
                                <PopoverTrigger>
                                    <MoreHorizontal />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="flex gap-2">
                                        <Edit2 />
                                        <span>Edit</span>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>
                
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable