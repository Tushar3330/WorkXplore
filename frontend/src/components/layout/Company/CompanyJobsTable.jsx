import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../ui/table";
  import { Avatar, AvatarImage } from "../../ui/avatar";
  import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
  import { Edit2, MoreHorizontal } from "lucide-react";
  import { useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom"; // Add navigate hook
  
  const CompaniesTable = () => {
    const { companies } = useSelector((store) => store.company);
    const navigate = useNavigate();
  
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
            {companies?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4}>
                  <span>No companies registered yet</span>
                </TableCell>
              </TableRow>
            ) : (
              companies?.map((company) => (
                <TableRow key={company._id}> {/* Add unique key here */}
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={company.logo} />
                    </Avatar>
                  </TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div
                          onClick={() =>
                            navigate(`/recruiter/companies/${company._id}`)
                          }
                          className="flex items-center gap-2 w-fit cursor-pointer"
                        >
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default CompaniesTable;
  