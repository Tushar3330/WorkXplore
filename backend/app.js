// Import Required modules and packages

import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongodbconnect from './utils/db.js';

//importing the routes
import userRoutes from './routes/userRoutes.js';
import companyRoutes from './routes/companyRoutes.js'
import jobRoutes from './routes/jobRoutes.js';  
import applicationRoutes from './routes/applicationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';


dotenv.config({});
const PORT = process.env.PORT || 5000;

// Create an express application
const app = express();

//adding Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//setting cors for backend and frontend connection
//starting frontend server on port 5173
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
)); 

//Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/company' , companyRoutes);
app.use('/api/v1/job', jobRoutes);
app.use('/api/v1/application', applicationRoutes);
app.use('/api/v1/admin', adminRoutes);

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


//code for the payment method using the stripe API
app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert ₹ to paise
            currency: 'inr',
        });

        res.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});



//Running the server on the defined PORT
app.listen(PORT, () => {
    mongodbconnect();
    console.log(`Server is running on port ${PORT}`);
    });
