import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { userColomns } from "./../datatablesource";
import { ADMIN_API_END_POINT } from "./../utils/constant";
import { Link } from "react-router-dom";

const paginationModel = { page: 0, pageSize: 5 };
function Datatable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data on component mount
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${ADMIN_API_END_POINT}/users`);
        console.log("API Response:", response.data);
        const students = response.data.students; // Assuming the response has the user data
        console.log("API Response:", students);
        setUsers(students); // Update state with filtered data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Delete a user from the database
  const handleDelete = async (id) => {
    try {
      await axios.get(`${ADMIN_API_END_POINT}/users/delete/${id}`); // API call to delete the user
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id)); // Update the state to remove the user
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleView = async (id) => {
    try {
      
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex gap-2">
            <Link to={`/adminpanel/users/${params.row._id}`}
              className="border rounded-md  p-[5px] w-[30%] h-10 mt-2 flex items-center text-blue-700  hover:border-blue-700 cursor-pointer"
             >
              View
            </Link>
            <div
              className="border rounded-md  p-[5px] w-[30%] h-10 mt-2 flex items-center text-red-700  hover:border-red-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(params.row._id);
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Paper sx={{ height: 600, width: 1250 }}>
          <DataGrid
            rows={users}
            columns={userColomns.concat(actionColumn)}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            getRowId={(row) => row._id}
            sx={{ border: 0 }}
          />
        </Paper>
      )}
    </div>
  );
}

export default Datatable;
