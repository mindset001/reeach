# Reeach Backend API

Backend server for Reeach admin panel and waitlist management.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
   - Set `MONGODB_URI` to your MongoDB connection string
   - Set `JWT_SECRET` to a secure random string
   - Set `PORT` (default: 5000)

4. Start MongoDB (if running locally):
```bash
mongod
```

5. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## Initial Admin Setup

To create the first admin account, make a POST request to:

```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "email": "admin@reeach.co",
  "password": "your_secure_password",
  "name": "Admin Name"
}
```

**Note:** In production, you should disable or protect the `/api/auth/register` endpoint after creating your admin accounts.

## API Endpoints

### Authentication

#### Register Admin (Initial Setup)
```
POST /api/auth/register
Body: { email, password, name }
```

#### Login
```
POST /api/auth/login
Body: { email, password }
Returns: { token, admin }
```

#### Get Current Admin
```
GET /api/auth/me
Headers: Authorization: Bearer <token>
```

### Admin Routes (Protected)

#### Get All Waitlist Entries
```
GET /api/admin/waitlist
Headers: Authorization: Bearer <token>
Query Params:
  - userType: consumer|retailer|distributor|manufacturer|all
  - page: number (default: 1)
  - limit: number (default: 50)
  - search: string
```

#### Get Single Waitlist Entry
```
GET /api/admin/waitlist/:id
Headers: Authorization: Bearer <token>
```

#### Delete Waitlist Entry
```
DELETE /api/admin/waitlist/:id
Headers: Authorization: Bearer <token>
```

#### Get Dashboard Statistics
```
GET /api/admin/stats
Headers: Authorization: Bearer <token>
```

#### Export Waitlist to CSV
```
POST /api/admin/export
Headers: Authorization: Bearer <token>
Body: { userType: "all" | "consumer" | "retailer" | "distributor" | "manufacturer" }
```

### Public Routes

#### Submit Waitlist Form
```
POST /api/waitlist/submit
Body: {
  userType: "consumer" | "retailer" | "distributor" | "manufacturer",
  email: string,
  phone?: string,
  location?: string,
  // Consumer specific
  fullName?: string,
  excitedFeatures?: string[],
  // Business specific
  businessName?: string,
  category?: string[],
  outlets?: string,
  primaryContact?: string
}
```

## Database Models

### Admin
- email (unique)
- password (hashed)
- name
- role (admin | super_admin)
- createdAt

### Waitlist
- userType (consumer | retailer | distributor | manufacturer)
- email
- phone
- location
- fullName (consumer)
- excitedFeatures (consumer)
- businessName (business)
- category (business)
- outlets (business)
- primaryContact (business)
- submittedAt
- ipAddress
- userAgent

## Security Features

- JWT authentication
- Password hashing with bcrypt
- Protected admin routes
- Input validation
- CORS enabled
- Environment variables for sensitive data

## Next Steps

1. Connect the frontend waitlist forms to POST /api/waitlist/submit
2. Build an admin dashboard UI that consumes the protected API endpoints
3. Add email notifications for new waitlist submissions
4. Implement rate limiting
5. Add logging and monitoring
6. Set up production database (MongoDB Atlas recommended)
