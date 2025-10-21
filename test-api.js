// Test script to verify herb identification API
const test = async () => {
  try {
    console.log('🧪 Testing Herb Identification API...');
    
    // Test 1: Health check
    console.log('\n1. Testing health endpoint...');
    const healthResponse = await fetch('http://localhost:8080/api/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test 2: Check if Gemini API key is loaded
    console.log('\n2. Environment check...');
    console.log('GEMINI_API_KEY loaded:', process.env.GEMINI_API_KEY ? '✅ Yes' : '❌ No');
    
    // Test 3: Test with demo user login
    console.log('\n3. Testing login...');
    const loginResponse = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'farmer1@example.com',
        password: 'password123'
      })
    });
    
    if (!loginResponse.ok) {
      throw new Error('Login failed');
    }
    
    const loginData = await loginResponse.json();
    console.log('✅ Login successful:', loginData.user.email);
    
    console.log('\n🎉 All basic tests passed!');
    console.log('\n📝 To test image identification:');
    console.log('1. Visit: http://localhost:3000/identify-herb');
    console.log('2. Login with: farmer1@example.com / password123');
    console.log('3. Upload an herb image to test Gemini AI integration');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
};

// Run the test
test();
