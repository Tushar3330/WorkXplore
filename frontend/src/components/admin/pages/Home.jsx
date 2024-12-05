import  { useState, useEffect } from 'react'
import axios from "axios";
import { ADMIN_API_END_POINT } from "./../utils/constant";
import Widget from '../components/Widget'
import Featured from '../components/Featured'
import Chart from '../components/Chart'

function Home() {
  const [users, setUsers] = useState([]);
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data on component mount
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${ADMIN_API_END_POINT}/users`);
        console.log("API Response:", response.data);
        const students = response.data.students; // Assuming the response has the user data
        const recruites = response.data.recruiters; // Assuming the response has the user data
        console.log("API Response:", students);
        setUsers(students); // Update state with filtered data
        setRecruiters(recruites); // Update state with filtered data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
       <div className="widgets flex gap-5 justify-between m-10">
          <Widget type = "users" amount = {users.length}/>
          <Widget type = "orders" amount = {recruiters.length}/>
          <Widget type = "earning" amount = {100}/>
          <Widget type = "balance" amount = {200}/>
        </div>
        <div className="charts flex gap-5 m-10">
          <Featured users = {users} recruiters = {recruiters}/>
          <Chart users = {users} recruiters = {recruiters}/>
        </div>
    </div>
  )
}

export default Home