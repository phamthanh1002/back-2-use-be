# Back2Use - QR-based Reusable Packing Management for F&B

A comprehensive backend API for F&B businesses to manage sustainable reusable containers with QR codes, integrated payment processing, eco-reward system, blockchain transparency, and real-time notifications.

## 🌟 Features

- 🔐 **Authentication & Authorization** - JWT-based auth with role-based access control (User, Staff, Admin, Business)
- 🏢 **Business Management** - Multi-tenant business profiles with geospatial search capabilities
- 📦 **Product Management** - Reusable container inventory tracking with QR code support
- 💰 **Wallet & Payments** - Secure payment gateway integration (VNPay, MoMo)
- ♻️ **Eco Rewards** - Gamification with eco-points, leaderboards, and reward policies
- 🎫 **Voucher System** - Flexible discount and reward voucher management
- 📊 **Advanced Analytics** - CO2 reduction tracking, usage statistics, and business reporting
- 📱 **Real-time Notifications** - WebSocket-based notification system for users and staff
- 📦 **Borrow Transactions** - Track reusable container borrowing and returns
- 👥 **User Profiles** - Multi-user support with address management and preferences
- 🛍️ **Subscription Plans** - Recurring service management
- ⭐ **Feedback System** - Customer reviews and ratings for quality assurance
- ⛓️ **Blockchain Integration** - Transparent transaction tracking on Polygon testnet blockchain with Ethers.js

## 🔗 Live Demo

Backend API: [Back2Use API](https://back-2-use.up.railway.app)  
API Documentation: [Swagger UI](https://back-2-use.up.railway.app/api)

## 🛠️ Technology Stack

- **Framework:** NestJS (v11.0.1) - Progressive Node.js framework
- **Language:** TypeScript (v5.7.3)
- **Database:** MongoDB (v8.18.0) with Mongoose ODM
- **Authentication:** 
  - Passport JWT (v4.0.1)
  - Google OAuth 2.0
- **Payment Integration:**
  - VNPay (Vietnam payment gateway)
  - MoMo (Mobile wallet)
- **File Storage:** Cloudinary (v2.7.0)
- **Email Service:** Nodemailer (v7.0.6)
- **Real-time Communication:** Socket.io (v4.8.1)
- **API Documentation:** Swagger/OpenAPI (v11.2.0)
- **Task Scheduling:** NestJS Schedule (v6.0.1)
- **Security:** Bcrypt (v6.0.0)
- **Blockchain:** Ethers.js (v6.16.0)
- **Testing:** Jest (v29.7.0)

## 📂 Project Structure

```
back-2-use-be/
├── src/
│   ├── common/
│   │   ├── constants/           # Application enums and constants
│   │   ├── dtos/                # Data Transfer Objects
│   │   ├── filters/             # Global exception filters
│   │   ├── guards/              # Authentication and authorization guards
│   │   ├── helpers/             # Utility helper functions
│   │   ├── interfaces/          # TypeScript interfaces
│   │   ├── pipelines/           # Custom pipes
│   │   ├── utils/               # Utility functions
│   │   └── cron/                # Scheduled tasks and cron jobs
│   ├── config/                  # Configuration modules
│   │   ├── jwt.config.ts
│   │   ├── vnpay.config.ts
│   │   └── borrow-transactions.config.ts
│   ├── infrastructure/          # External service integrations
│   │   ├── cloudinary/          # Image upload service
│   │   ├── geocoding/           # Location services
│   │   ├── mailer/              # Email service
│   │   ├── momo/                # MoMo payment gateway
│   │   ├── polygon/             # Polygon blockchain
│   │   └── vnpay/               # VNPay payment gateway
│   ├── modules/                 # Feature modules
│   │   ├── admin/               # Admin management
│   │   ├── auth/                # Authentication
│   │   ├── borrow-transactions/ # Container borrowing logic
│   │   ├── businesses/          # Business profiles
│   │   ├── eco-reward-policies/ # Eco-reward system
│   │   ├── feedback/            # Reviews and ratings
│   │   ├── leaderboard-reward/  # Leaderboard system
│   │   ├── materials/           # Container materials
│   │   ├── notifications/       # Notification system
│   │   ├── products/            # Product management
│   │   ├── staffs/              # Staff management
│   │   ├── subscriptions/       # Subscription plans
│   │   ├── users/               # User profiles
│   │   ├── voucher-codes/       # Voucher distribution
│   │   ├── vouchers/            # Voucher templates
│   │   ├── wallet-transactions/ # Financial transactions
│   │   ├── wallets/             # User wallets
│   │   └── system-settings/     # System configuration
│   ├── app.controller.ts        # Root controller
│   ├── app.module.ts            # Root module
│   ├── app.service.ts           # Root service
│   └── main.ts                  # Application entry point
├── scripts/
│   ├── seed.ts                  # Database seeding script
│   ├── cleanup.ts               # Database cleanup utility
│   └── seed.mongodb.js          # MongoDB shell seed script
├── test/                        # End-to-end tests
├── package.json
├── tsconfig.json
├── nest-cli.json
├── eslint.config.mjs
└── vercel.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Clone the Repository

```bash
git clone https://github.com/phamthanh1002/back-2-use-be.git
cd back-2-use-be
```

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```bash
# Application
PORT=8000

# Database (MongoDB Atlas)
DATABASE_URL=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/back_2_use?retryWrites=true&w=majority

# JWT Configuration
JWT_ACCESS_SECRET=your_access_secret_key
JWT_REFRESH_SECRET=your_refresh_secret_key
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=7d

# Email Service (Gmail SMTP)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
DEFAULT_FROM_NAME=Back2Use
DEFAULT_FROM_ADDRESS=noreply@back2use.com

# OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:8000/auth/google-redirect

# Map Service
OPEN_MAP_API_KEY=your_openmap_api_key

# File Storage (Cloudinary)
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Payment Gateway (VNPay)
VNP_TMN_CODE=your_vnpay_code
VNP_HASH_SECRET=your_vnpay_secret
VNP_URL=https://sandbox.vnpayment.vn/paymentv2/vpcpay.html
VNP_RETURN_URL=http://localhost:8000/vnpay/return

# Frontend URL for Redirects
CLIENT_RETURN_URL=http://localhost:5147/

# Blockchain (Polygon)
POLYGON_PRIVATE_KEY=your_wallet_private_key
CONTRACT_ADDRESS=your_smart_contract_address
RPC_URL=https://polygon-amoy.g.alchemy.com/v2/your_alchemy_api_key
```

### Running the Application

#### Development Mode (with hot-reload)
```bash
npm run start:dev
```

#### Production Mode
```bash
npm run build
npm run start:prod
```

#### Debug Mode
```bash
npm run start:debug
```

The API will be available at `http://localhost:8000`  
Swagger documentation at `http://localhost:8000/api`

### Database Seeding

Populate the database with sample data:
```bash
npm run seed
```

Clean up the database:
```bash
npm run cleanup
```

## 🧪 Testing

### Run Tests
```bash
npm run test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test:cov
```

### Run E2E Tests
```bash
npm run test:e2e
```

## 📋 Code Quality

### Run ESLint
```bash
npm run lint
```

### Format Code
```bash
npm run format
```

## 📚 API Documentation

Once the application is running, you can access the Swagger UI documentation at:

```
http://localhost:8000/api
```

The API follows RESTful conventions and includes comprehensive endpoint documentation with request/response schemas.

## Test Credentials

After seeding the database, you can login with:

| Role     | Username               | Password    |
| -------- | -----------------------| ----------- |
| Admin    | admin1                 | 123456      |
| Customer | congduy1               | 123456      |
| Business | duong2306              | 123456      |

## 🏗️ Architecture Overview

### Authentication Flow
- Users authenticate via JWT, Google OAuth, or Facebook OAuth
- Role-based access control (RBAC) with User, Staff, Admin, and Business roles
- Protected routes use JWT authentication guards

### Payment Processing
- VNPay integration for Vietnamese card payments
- MoMo integration for mobile wallet payments
- Transaction tracking and wallet management

### Real-time Features
- Socket.io for WebSocket connections
- Real-time notifications for order updates and rewards
- Live leaderboard updates

### Eco-Reward System
- Points earned from container usage
- Monthly leaderboards with reward distribution
- Configurable eco-reward policies
- Voucher redemption system

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Development Checklist

See [DATABASE_SETUP_CHECKLIST.md](DATABASE_SETUP_CHECKLIST.md) for database configuration requirements.

## 📜 License

This project is licensed under the UNLICENSED license.

---

**Course:** SEP490 - Capstone Project  
**Version:** 1.0.0  
**Last Updated:** February 2026
