import Application from "../models/applicationModel.js";
import Job from "../models/jobModel.js";
import User from '../models/userModel.js'

// Get all students and recruiters
export const getAllUsers = async(req,res)=>{
    try {
        const students = await User.find({ role: "student" });
        const recruiters = await User.find({ role: "recruiter" });
        const admins = await User.find({ role: "admin" });
        if(!students){
            response.status(404).json({
                message: "No students found.",
                success: false
            })
        }
        if(!recruiters){
            response.status(404).json({
                message: "No recruiters found.",
                success: false
            })
        }
        if(!admins){
            response.status(404).json({
                message: "No admins found.",
                success: false
            })
        }
        res.json({ students, recruiters, admins });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new user
export const createUser = async (req,res) => {
    const { fullname, email, phoneNumber, password, role } = req.body;

    try {
        const newUser = new User({ fullname, email, phoneNumber, password, role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a user
export const deleteUser = async (req,res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message:  "user deleted successfully",
            success: true  });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createAdmin = async (req, res) => {
    const { fullname, email, phoneNumber, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new User({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role: 'admin', // Set the role to 'admin'
        });

        // Save the user in the database
        await newAdmin.save();
        res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
    } catch (error) {
        res.status(500).json({ message: 'Error creating admin', error: error.message });
    }
};

export const getAppliedJobs = async (req, res) => {
    try {
      const { studentId } = req.params;
      console.log("Fetching applications for studentId:", studentId);
  
      const applications = await Application.find({ applicant: studentId })
        .sort({ createdAt: -1 })
        .populate({
          path: "job",
          options: { sort: { createdAt: -1 } },
          populate: {
            path: "company",
            options: { sort: { createdAt: -1 } },
          },
        });
  
      console.log("Applications fetched:", applications);
  
      if (!applications || applications.length === 0) {
        console.log("No applications found for studentId:", studentId);
        return res.status(404).json({
          message: "No applications found for the specified student.",
          success: false,
        });
      }      
  
      return res.status(200).json({
        applications,
        success: true,
      });
    } catch (error) {
      console.error("Error fetching applied jobs:", error); // Log the actual error
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
        error: error.message, // Include the error message for debugging
      });
    }
  };

  export const getAdminJobs = async (req, res) => {
    try {
        const { recruiterId } = req.params;
        const jobs = await Job.find({ created_by: recruiterId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}