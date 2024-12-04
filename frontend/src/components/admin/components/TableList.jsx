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

function TableList({ id }) {
  console.log(id);

  const [application, setApplication] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${ADMIN_API_END_POINT}/get/${id}`); // Fetch all users
        // console.log(response);
        setApplication(response.data.applications || null); // Set user or null if not found
        console.log(application);
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

  if (!application) {
    return <p className="shadow-xl rounded-md">Application not found!</p>;
  }
  const rows = application;
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
            <TableCell className="font-bold text-xl">User ID</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Positions</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row._id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">{row.job?.title}</div>
              </TableCell>
              <TableCell>{row.job?.location}</TableCell>
              <TableCell>{row.job?.salary}</TableCell>
              <TableCell>{row.job?.position}</TableCell>
              <TableCell>
                <div className={getStatusClass(row.status)}>
                  {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableList;
