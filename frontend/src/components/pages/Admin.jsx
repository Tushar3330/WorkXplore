import { useState, useEffect } from 'react';
import axios from 'axios';
import { ADMIN_API_END_POINT } from '../../utils/constant';

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);
    const [recruiters, setRecruiters] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: 'student', // default to student
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${ADMIN_API_END_POINT}/users`);
                console.log(res.data);
                const { students, recruiters, admins } = res.data;
                if (students) setStudents(students);
                if (recruiters) setRecruiters(recruiters);
                if (admins) setAdmins(admins);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id, role) => {
        try {
            console.log(`Deleting user with ID: ${id} and role: ${role}`); // Debugging log
            const response = await axios.get(`${ADMIN_API_END_POINT}/users/${id}`);
            console.log(response.data); // Check the API response
            if (role === 'student') setStudents(students.filter(user => user._id !== id));
            if (role === 'recruiter') setRecruiters(recruiters.filter(user => user._id !== id));
            if (role === 'admin') setAdmins(admins.filter(user => user._id !== id));
        } catch (error) {
            console.error('Error deleting user', error);
        }
    };
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Submitting form data:', formData); // Debugging log
            const res = await axios.post(`${ADMIN_API_END_POINT}/users`, formData);
            console.log('User created:', res.data); // Check the API response
            const newUser = res.data.user;
            if (newUser.role === 'student') setStudents([...students, newUser]);
            if (newUser.role === 'recruiter') setRecruiters([...recruiters, newUser]);
            if (newUser.role === 'admin') setAdmins([...admins, newUser]);
            // Reset form data after successful creation
            setFormData({ fullname: '', email: '', phoneNumber: '', password: '', role: 'student' });
        } catch (error) {
            console.error('Error creating user', error);
        }
    };
    

    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold mb-10 text-center">Admin Dashboard</h1>

            {/* Students Table */}
            <h2 className="text-2xl font-semibold mb-4">Students</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="text-left py-3 px-4">Full Name</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Phone</th>
                        <th className="py-3 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map(user => (
                            <tr key={user._id} className="border-b">
                                <td className="py-3 px-4">{user.fullname}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.phoneNumber}</td>
                                <td className="py-3 px-4">
                                    <button 
                                        onClick={() => handleDelete(user._id, 'student')} 
                                        className="text-red-600 hover:underline">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4" className="text-center py-3">No students available</td></tr>
                    )}
                </tbody>
            </table>

            {/* Recruiters Table */}
            <h2 className="text-2xl font-semibold mb-4">Recruiters</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <thead>
                    <tr className="bg-green-500 text-white">
                        <th className="text-left py-3 px-4">Full Name</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Phone</th>
                        <th className="py-3 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {recruiters.length > 0 ? (
                        recruiters.map(user => (
                            <tr key={user._id} className="border-b">
                                <td className="py-3 px-4">{user.fullname}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.phoneNumber}</td>
                                <td className="py-3 px-4">
                                    <button 
                                        onClick={() => handleDelete(user._id, 'recruiter')} 
                                        className="text-red-600 hover:underline">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4" className="text-center py-3">No recruiters available</td></tr>
                    )}
                </tbody>
            </table>

            {/* Admins Table */}
            <h2 className="text-2xl font-semibold mb-4">Admins</h2>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <thead>
                    <tr className="bg-red-500 text-white">
                        <th className="text-left py-3 px-4">Full Name</th>
                        <th className="text-left py-3 px-4">Email</th>
                        <th className="text-left py-3 px-4">Phone</th>
                        <th className="py-3 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.length > 0 ? (
                        admins.map(user => (
                            <tr key={user._id} className="border-b">
                                <td className="py-3 px-4">{user.fullname}</td>
                                <td className="py-3 px-4">{user.email}</td>
                                <td className="py-3 px-4">{user.phoneNumber}</td>
                                <td className="py-3 px-4">
                                    <button 
                                        onClick={() => handleDelete(user._id, 'admin')} 
                                        className="text-red-600 hover:underline">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr><td colSpan="4" className="text-center py-3">No admins available</td></tr>
                    )}
                </tbody>
            </table>

            {/* Form to create new users */}
            <h2 className="text-2xl font-semibold mb-4">Create New User/Admin</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="fullname">Full Name</label>
                    <input 
                        type="text" 
                        name="fullname" 
                        value={formData.fullname} 
                        onChange={handleInputChange} 
                        className="w-full px-4 py-2 border rounded-lg" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="w-full px-4 py-2 border rounded-lg" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleInputChange} 
                        className="w-full px-4 py-2 border rounded-lg" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleInputChange} 
                        className="w-full px-4 py-2 border rounded-lg" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="role">Role</label>
                    <select 
                        name="role" 
                        value={formData.role} 
                        onChange={handleInputChange} 
                        className="w-full px-4 py-2 border rounded-lg"
                    >
                        <option value="student">Student</option>
                        <option value="recruiter">Recruiter</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Create User</button>
            </form>
        </div>
    );
};

export default AdminDashboard;
