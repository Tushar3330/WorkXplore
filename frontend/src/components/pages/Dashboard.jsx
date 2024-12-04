
import { useSelector } from "react-redux";
import RecruiterDashboard from "../dashboard/RecruiterDaashboard";
import UserDashboard from "../dashboard/UserDashboard";

function Dashboard() {
  const { user } = useSelector((store) => store.auth);

  return user.role === "recruiter" ? <RecruiterDashboard /> : <UserDashboard />;
}

export default Dashboard;
