
import userModel from '../models/userModel.js'

// Get all students and recruiters
export const getAllUsers = async(req,res)=>{
    try {
        const students = await userModel.find({ role: "student" });
        const recruiters = await userModel.find({ role: "recruiter" });
        const admins = await userModel.find({ role: "admin" });
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
                message: "No recruiters found.",
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
        const newUser = new userModel({ fullname, email, phoneNumber, password, role });
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
        await userModel.findByIdAndDelete(userId);
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