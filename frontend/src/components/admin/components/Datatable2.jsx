import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { recruiterColomns } from "./../datatablesource";
import { ADMIN_API_END_POINT } from "./../utils/constant";
import { Link } from "react-router-dom";

const paginationModel = { page: 0, pageSize: 5 };
function Datatable2() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data on component mount
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${ADMIN_API_END_POINT}/users`);
        console.log("API Response:", response.data);
        const recruiters = response.data.recruiters; // Assuming the response has the user data
        setUsers(recruiters); // Update state with filtered data
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

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex gap-2">
            <Link to={`/adminpanel/recruiters/${params.row._id}`} className="border rounded-md  p-[5px] w-[30%] h-10 mt-2 flex items-center text-blue-700  hover:border-blue-700 cursor-pointer">
              View
            </Link>
            <button
              className="border rounded-md  p-[5px] w-[30%] h-10 mt-2 flex items-center text-red-700  hover:border-red-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(params.row._id);
              }}
            >
              Delete
            </button>
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
            columns={recruiterColomns.concat(actionColumn)}
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

export default Datatable2;
