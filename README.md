# WorkXplore 🚀

## 📋 Project Overview

**WorkXplore** is a full-stack job portal application designed to streamline the job search and recruitment process. It provides a comprehensive platform connecting job seekers with employers through an intuitive interface and real-time updates.

### Key Features

- 🔐 **Multi-Role Authentication System** (Student/Job Seeker, Recruiter, Admin)
- 💼 **Job Management** - Post, browse, and apply for jobs
- 🏢 **Company Profiles** - Create and manage company profiles
- 📊 **Admin Dashboard** - Comprehensive analytics and user management
- 💳 **Payment Integration** - Stripe payment gateway for premium features
- ☁️ **Cloud Storage** - Cloudinary integration for file uploads

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) & bcrypt
- **File Upload**: Multer & Cloudinary
- **Payment**: Stripe API
- **Additional**: Cookie-parser, CORS, dotenv

### Frontend
- **Framework**: React 18 with Vite
- **State Management**: Redux Toolkit with Redux Persist
- **Routing**: React Router DOM v6
- **UI Components**: 
  - Radix UI (Dialog, Avatar, Popover, Select, etc.)
  - Material-UI (MUI) & MUI Icons
  - Tailwind CSS with shadcn/ui
- **Charts**: Recharts, Chart.js
- **Payment**: Stripe React Components
- **Animations**: Framer Motion, Animate.css
- **Notifications**: React Toastify, Sonner

---

## 📁 Project Structure

```
WorkXplore/
├── backend/
│   ├── app.js                 # Main application entry point
│   ├── controllers/           # Business logic controllers
│   │   ├── adminController.js
│   │   ├── applicationController.js
│   │   ├── companyController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   ├── middlewares/           # Custom middlewares
│   │   ├── authentication.js  # JWT authentication
│   │   ├── isadmin.js        # Admin authorization
│   │   └── multer.js         # File upload handling
│   ├── models/               # Mongoose schemas
│   │   ├── applicationModel.js
│   │   ├── companyModel.js
│   │   ├── jobModel.js
│   │   └── userModel.js
│   ├── routes/               # API routes
│   │   ├── adminRoutes.js
│   │   ├── applicationRoutes.js
│   │   ├── companyRoutes.js
│   │   ├── jobRoutes.js
│   │   └── userRoutes.js
│   └── utils/                # Utility functions
│       ├── cloudinary.js     # Cloudinary configuration
│       ├── datauri.js        # Data URI parser
│       └── db.js             # MongoDB connection
│
└── frontend/
    ├── src/
    │   ├── components/       # React components
    │   │   ├── admin/       # Admin panel components
    │   │   ├── auth/        # Login/Signup components
    │   │   ├── common/      # Shared components
    │   │   ├── dashboard/   # User/Recruiter dashboards
    │   │   ├── layout/      # Layout components
    │   │   ├── pages/       # Page components
    │   │   ├── revenue/     # Payment/Plans components
    │   │   └── ui/          # UI library components
    │   ├── hooks/           # Custom React hooks
    │   ├── redux/           # Redux store and slices
    │   ├── utils/           # Utility functions & constants
    │   ├── App.jsx          # Main App component
    │   └── main.jsx         # Application entry point
    └── public/              # Static assets
```

---

## 🔌 API Endpoints

### Base URL
```
Backend: http://localhost:3000/api/v1
Frontend: http://localhost:5173
```

### 👤 User Routes (`/api/v1/users`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user (student/recruiter) with fullname, email, phoneNumber, password, role | No |
| POST | `/login` | User login with email, password, role | No |
| GET | `/logout` | User logout | No |
| POST | `/profile/update` | Update user profile (fullname, email, phoneNumber, bio, skills, resume file) | Yes |

### 🏢 Company Routes (`/api/v1/company`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register a new company with companyName | Yes (Recruiter) |
| GET | `/get` | Get all companies by logged-in recruiter | Yes |
| GET | `/get/:id` | Get company by ID | Yes |
| PUT | `/update/:id` | Update company details (name, description, website, location, logo) | Yes (Recruiter) |

### 💼 Job Routes (`/api/v1/job`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/post` | Post a new job (title, description, requirements, salary, location, jobType, experience, position, companyId) | Yes (Recruiter) |
| GET | `/get` | Get all jobs with optional search query parameter (?keyword=value) | Yes |
| GET | `/get/:id` | Get job by ID with populated applications | Yes |
| GET | `/getadminjobs` | Get all jobs posted by logged-in recruiter | Yes (Recruiter) |

### 📝 Application Routes (`/api/v1/application`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/apply/:id` | Apply for a job by job ID | Yes (Student) |
| GET | `/get` | Get all applied jobs by logged-in user | Yes (Student) |
| GET | `/:id/applicants` | Get all applicants for a specific job | Yes (Recruiter) |
| POST | `/status/:id/update` | Update application status (pending/accepted/rejected) | Yes (Recruiter) |

### 🔧 Admin Routes (`/api/v1/admin`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/users` | Get all users (students, recruiters, admins) | Yes (Admin) |
| POST | `/users` | Create a new user (fullname, email, phoneNumber, password, role) | Yes (Admin) |
| GET | `/users/delete/:id` | Delete a user by ID | Yes (Admin) |
| POST | `/create` | Create a new admin (fullname, email, phoneNumber, password) | Yes (Admin) |
| GET | `/get/:studentId` | Get applied jobs by student ID | Yes (Admin) |
| GET | `/getjobs/:recruiterId` | Get jobs posted by recruiter ID | Yes (Admin) |

### 💳 Payment Route

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/create-payment-intent` | Create Stripe payment intent (amount in INR) | No |

---

## 📊 Data Models

- **User**: fullname, email, phoneNumber, password, role (student/recruiter/admin), profile (bio, skills, resume, company, profilePhoto)
- **Company**: name, description, website, location, logo, userId
- **Job**: title, description, requirements, salary, experienceLevel, location, jobType, position, company, created_by, applications
- **Application**: job, applicant, status (pending/accepted/rejected)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Cloudinary Account
- Stripe Account

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file in backend directory:**
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret_key
   
   # Cloudinary Configuration
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   
   # Stripe Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the backend server:**
   ```bash
   npm run dev
   ```
   Server will start on `http://localhost:3000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Update API endpoints (if needed) in:**
   ```
   frontend/src/utils/constant.js
   ```

4. **Run the frontend development server:**
   ```bash
   npm run dev
   ```
   Frontend will start on `http://localhost:5173`

---

## 🔐 Authentication & Security

- JWT-based authentication with HTTP-only cookies (24-hour expiry)
- Password hashing with bcrypt
- Role-based access control (Student, Recruiter, Admin)
- Protected API routes with authentication middleware
- CORS configuration for frontend-backend communication

---

## 💳 Payment Integration

Stripe payment gateway integrated for premium features.

**Test Card:** `4242 4242 4242 4242` (any future expiry, any CVC)

---

## 🎨 Frontend Routes

- `/` - Homepage
- `/login` - User login
- `/signup` - User registration
- `/jobs` - Browse jobs
- `/browse` - Job browsing page
- `/profile` - User profile
- `/dashboard` - User/Recruiter dashboard
- `/description/:id` - Job details
- `/recruiter/companies` - Company management (Protected)
- `/recruiter/jobs` - Job management (Protected)
- `/recruiter/jobs/:id/applicants` - View applicants (Protected)
- `/adminpanel` - Admin dashboard (Admin only)
- `/revenuehome` - Revenue/Plans page
- `/plans` - Subscription plans

---

## 📦 State Management

Redux Toolkit with persisted state (authSlice, jobSlice, companySlice, applicationSlice)

---

## 👨‍💻 Author

**Tushar Rana**
- GitHub: [@Tushar3330](https://github.com/Tushar3330)
- Repository: [WorkXplore](https://github.com/Tushar3330/WorkXplore)

