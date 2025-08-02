# ZippGo - Full Stack Ride Booking Application 🚗

A modern, full-stack ride booking application built with React, Node.js, and MongoDB.

## 🏗️ Project Structure

```
zippgo-fullstack/
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/      # UI Components
│   │   ├── pages/          # Page Components
│   │   ├── contexts/       # React Contexts
│   │   ├── services/       # API Services
│   │   └── lib/            # Utilities
│   ├── public/             # Static Assets
│   └── package.json        # Frontend Dependencies
├── zippgo-backend/         # Node.js Backend
│   ├── controllers/        # Route Controllers
│   ├── models/            # Database Models
│   ├── routes/            # API Routes
│   ├── middleware/        # Custom Middleware
│   ├── config/           # Configuration
│   └── package.json      # Backend Dependencies
└── package.json          # Root Project Config
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zippgo-fullstack
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   # Backend (.env file in zippgo-backend/)
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

## 📋 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:frontend` - Start only frontend development server
- `npm run dev:backend` - Start only backend server
- `npm run build` - Build frontend for production
- `npm run start` - Start backend server
- `npm run install:all` - Install dependencies for all projects
- `npm run clean` - Clean all node_modules and build files
- `npm run lint` - Run ESLint on frontend
- `npm run lint:fix` - Fix ESLint issues in frontend

### Frontend (cd frontend/)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### Backend (cd zippgo-backend/)
- `npm start` - Start Express server
- `npm run dev` - Start with nodemon (if available)

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### Rides
- `POST /api/rides` - Book a new ride
- `GET /api/rides` - Get all rides (admin)
- `GET /api/rides/user/:userId` - Get user's rides
- `PUT /api/rides/:rideId` - Update ride status

### Health Check
- `GET /api/health` - Server health status

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI Framework
- **Vite** - Build Tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Radix UI** - Headless UI components
- **Axios** - HTTP client
- **React Helmet** - Document head management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📱 Features

### User Features
- ✅ User registration and login
- ✅ JWT-based authentication
- ✅ User profile management
- ✅ Ride booking system
- ✅ Ride history tracking
- ✅ Real-time ride status updates

### UI/UX Features
- ✅ Responsive design
- ✅ Modern animations
- ✅ Dark theme
- ✅ Mobile-first approach
- ✅ Loading states
- ✅ Error handling
- ✅ Toast notifications

### Development Features
- ✅ Hot module replacement
- ✅ ESLint configuration
- ✅ TypeScript support ready
- ✅ Environment variable management
- ✅ Production build optimization

## 🔧 Configuration

### Frontend Configuration
- **Port**: 5173 (default)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context

### Backend Configuration
- **Port**: 5000 (default)
- **Database**: MongoDB Atlas
- **Authentication**: JWT
- **CORS**: Enabled for frontend

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy dist/ folder to your hosting service
```

### Backend Deployment
```bash
cd zippgo-backend
npm start
# Deploy to your server or cloud platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@zippgo.com or create an issue in the repository.

---

**Built with ❤️ by the ZippGo Team** 