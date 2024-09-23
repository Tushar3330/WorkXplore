// Import Required modules and packages
import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongodbconnect from './utils/db.js';

//importing the routes
import userRoutes from './routes/userRoutes.js';
import companyRoutes from './routes/companyRoutes.js'



dotenv.config({});
const PORT = process.env.PORT || 5000;

// Create an express application
const app = express();

//adding Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//setting cors for backend and frontend connection
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
)); 


//Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/company' , companyRoutes);

//Running the server on the defined PORT
app.listen(PORT, () => {
    mongodbconnect();
    console.log(`Server is running on port ${PORT}`);
    });
