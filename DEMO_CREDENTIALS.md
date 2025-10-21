# 🔑 Demo User Credentials & Testing Guide

## 👥 **Available Demo Users**

All demo users have the same password: **`demo123`**

### 🌱 **Farmer Account**
- **Email**: `farmer@demo.com`
- **Password**: `demo123`
- **Username**: `demo_farmer`
- **Full Name**: John Farmer
- **Organization**: Green Valley Herbs Farm

### 👤 **Consumer Account**
- **Email**: `consumer@demo.com`
- **Password**: `demo123`
- **Username**: `demo_consumer`
- **Full Name**: Sarah Consumer
- **Organization**: Individual Consumer

### 🏭 **Manufacturer Account**
- **Email**: `manufacturer@demo.com`
- **Password**: `demo123`
- **Username**: `demo_manufacturer`
- **Full Name**: Michael Producer
- **Organization**: Ayur Manufacturing Co.

### 🛡️ **Regulator Account**
- **Email**: `regulator@demo.com`
- **Password**: `demo123`
- **Username**: `demo_regulator`
- **Full Name**: Dr. Priya Regulator
- **Organization**: Ayurvedic Regulatory Authority

## 🚀 **How to Test the Full System**

### **Step 1: Login**
1. Visit: http://localhost:3000/auth/login
2. Choose any demo account above
3. Enter email and password (`demo123`)

### **Step 2: Access Dashboard**
- After login, you'll be redirected to the role-specific dashboard
- Each role has different features and permissions

### **Step 3: Test AI Herb Identification**
1. From dashboard, click **"AI Herb Identification"** card
2. Or use the navigation: **"🔍 AI Herb ID"** 
3. Upload an herb image
4. Get full identification with user tracking

## 🎯 **Features by Role**

### 🌱 **Farmer Dashboard**
- ✅ AI Herb Identification (with user history)
- ✅ Register New Batch
- ✅ My Batches
- ✅ QR Codes
- ✅ Farm Analytics

### 👤 **Consumer Dashboard**  
- ✅ AI Herb Identification (with user history)
- ✅ Scan QR Code
- ✅ Track Products
- ✅ My Purchases
- ✅ Reports

### 🏭 **Manufacturer Dashboard**
- ✅ AI Herb Identification (with user history)
- ✅ Process Management
- ✅ Quality Control
- ✅ Production Analytics

### 🛡️ **Regulator Dashboard**
- ✅ AI Herb Identification (with user history)
- ✅ Compliance Monitoring
- ✅ Certification Management
- ✅ Regulatory Reports

## 🤖 **AI Herb Identification with Authentication**

### **Benefits of Logged-in Experience:**
1. **Personal History**: Track all your identifications
2. **Statistics**: View your identification accuracy trends
3. **Saved Results**: Access previous identification results
4. **User Context**: Results linked to your profile
5. **Blockchain Tracking**: All identifications recorded with your user ID

### **Testing the AI Feature:**
1. **Login** with any demo account
2. **Navigate** to AI Herb Identification
3. **Upload** herb image (JPG, PNG, WebP - max 5MB)
4. **View Results** with confidence scores and pricing
5. **Check History** - see all your previous identifications
6. **Statistics** - view your identification trends

## 🌐 **Access Points**

### **Main Application**
- **Homepage**: http://localhost:3000
- **Login Page**: http://localhost:3000/auth/login
- **Dashboard**: http://localhost:3000/dashboard
- **AI Herb ID**: http://localhost:3000/identify-herb

### **Backend API**
- **Health Check**: http://localhost:8080/api/health
- **API Base**: http://localhost:8080/api

## 📊 **Database Contents**

### **Users**: 4 demo users (all roles)
### **Prices**: 45 herb price records across 15 herbs
### **Identification History**: Will populate as you test

## 🔄 **Reset Demo Data**

If you want to reset the demo users:
```bash
# Navigate to backend directory
cd "C:\Users\Lenovo\Desktop\Hackathon\ayurvedic-traceability\backend"

# Run the seed script again
node src/scripts/seedUsers.js
```

## 🎉 **Ready to Demo!**

Your Ayurvedic Herb Traceability System is now fully functional with:

✅ **Complete Authentication System**
✅ **Role-based Dashboards** 
✅ **AI-Powered Herb Identification**
✅ **User-specific History Tracking**
✅ **Blockchain Integration**
✅ **Price Database with 45+ herbs**
✅ **Demo Users for All Roles**

**Start testing**: Login with any demo account and explore the full featured system! 🌿🚀
