const fetch = require('node-fetch');

async function registerAdmin() {
  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'admin@reeach.co',
        password: 'admin123',
        name: 'Admin'
      })
    });

    const data = await response.json();
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (response.ok) {
      console.log('\n✅ Admin account created successfully!');
      console.log('Email:', data.admin.email);
      console.log('You can now login at http://localhost:3000/admin/login');
    } else {
      console.log('\n❌ Error:', data.message);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

registerAdmin();
