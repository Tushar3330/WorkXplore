/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null || user.role !== 'recruiter') {
    
      // Redirect to the homepage
      navigate("/");
      toast.error("User not authorized");
    }
  }, [user, navigate]);

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedRoute;
