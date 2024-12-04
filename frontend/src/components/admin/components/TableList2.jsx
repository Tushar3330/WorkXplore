import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ADMIN_API_END_POINT } from "./../utils/constant";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableList2({ id }) {
  console.log(id);

  const [jobs, setJobs] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${ADMIN_API_END_POINT}/getjobs/${id}`); // Fetch all users
        console.log(response);
        setJobs(response.data.jobs || null); // Set user or null if not found
        console.log(jobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]); // Dependency array with userId

  if (loading) {
    return <p className="shadow-xl rounded-md">Loading...</p>;
  }

  if (!jobs|| jobs.length === 0) {
    return <p className="shadow-xl rounded-md">Jobs not found!</p>;
  }
  const rows = jobs;
  // Function to get the status styling
  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 px-0 py-2 rounded-md flex justify-center";
      case "accepted":
        return "bg-green-100 text-green-800 px-0 py-2 rounded-md flex justify-center";
      case "rejected":
        return "bg-red-100 text-red-800 px-0 py-2 rounded-md flex justify-center";
      default:
        return "bg-gray-100 text-gray-800 px-0 py-2 rounded-md flex justify-center";
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="font-bold text-xl">Job ID</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Positions</TableCell>
            <TableCell>Applicants</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row._id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-bold">{row.company?.name}</div>
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.salary}</TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell>{row.applications.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableList2;
