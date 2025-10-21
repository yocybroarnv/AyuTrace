# Ayurvedic Herb Traceability System

A blockchain-based full-stack web application for tracking Ayurvedic herbs from farm to consumer with geo-tagging and QR code verification.

## 🌿 Features

### User Roles & Capabilities

- **Farmer/Collector Portal**
  - Register herb batches with detailed information
  - Auto-capture GPS location (geo-tagging)
  - Create immutable blockchain records
  - Generate unique QR codes

- **Manufacturer/Processor Dashboard**
  - Scan and verify QR codes
  - Append processing stages to blockchain
  - Update batch status
  - Track processing workflow

- **Regulator/Admin Panel**
  - View all transactions on interactive map
  - Monitor compliance and sustainability
  - Generate reports and analytics
  - Flag illegal/unapproved sourcing

- **Consumer Module**
  - Scan QR codes via web camera
  - View complete herb journey
  - Access blockchain transaction history
  - Verify authenticity

## 🚀 Tech Stack

### Frontend
- React.js with Next.js
- TailwindCSS for styling
- QR code scanner integration
- Leaflet.js for mapping
- React Query for state management

### Backend
- Node.js with Express.js
- MongoDB for database
- JWT authentication
- Multer for file uploads
- QR code generation

### Blockchain
- Hyperledger Fabric (or Polygon SDK simulation)
- Smart contracts for herb tracking
- Immutable transaction records

### Additional Services
- Google Maps API / OpenStreetMap
- AWS/Azure/GCP for deployment
- Docker for containerization

## 📁 Project Structure

```
ayurvedic-traceability/
├── frontend/              # React.js application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── public/
├── backend/               # Node.js API server
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   └── services/      # Business logic
│   └── uploads/           # File uploads
├── blockchain/            # Smart contracts
│   ├── contracts/         # Solidity contracts
│   └── scripts/           # Deployment scripts
└── docker/               # Docker configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB
- Git

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables
Create `.env` files in both frontend and backend directories with required configurations.

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Herb Management
- `POST /api/herbs/register` - Register new herb batch
- `GET /api/herbs/:id` - Get herb batch details
- `PUT /api/herbs/:id/process` - Add processing stage
- `GET /api/herbs/qr/:qrCode` - Get herb by QR code

### Blockchain
- `POST /api/blockchain/record` - Record transaction
- `GET /api/blockchain/verify/:hash` - Verify transaction

### Reports & Analytics
- `GET /api/reports/compliance` - Compliance reports
- `GET /api/reports/geolocation` - Geo-location data

## 🚢 Deployment

The application is containerized using Docker and can be deployed on:
- AWS (EC2, ECS, Lambda)
- Azure (Container Instances, App Service)
- Google Cloud Platform (Cloud Run, GKE)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please open an issue on GitHub.
