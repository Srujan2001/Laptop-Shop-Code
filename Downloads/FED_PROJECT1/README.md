# Online Recycling Marketplace

A complete front-end React.js application for managing recyclable items, tracking pickup status, and earning reward points. Built with React, React Router, Context API, and localStorage for data persistence.

## Features

### User Portal
- **User Registration & Login** - Secure authentication with localStorage
- **Browse Recyclable Items** - View items by category (Paper, Plastic, Metal, E-waste)
- **Post New Items** - Upload images (stored as base64), set category, quantity, and location
- **Track Pickup Status** - Monitor status (Pending, Picked Up, Completed)
- **Edit/Delete Items** - Manage your posted items
- **Reward Points System** - Earn points when items are marked as completed

### Admin Portal
- **Admin Login** - Hardcoded credentials (admin@recycling.com / admin123)
- **Dashboard** - View all items with charts and statistics
- **Control Panel** - Approve/reject items, update pickup status, manage categories
- **User Management** - View all registered users
- **Payment Overview** - Track reward payments (PAID/PENDING status)

### General Features
- **Dark Mode Toggle** - Switch between light and dark themes
- **Search Functionality** - Search items by title or description
- **Responsive Design** - Mobile-friendly interface
- **Charts & Analytics** - Visual data representation for admin
- **Category Management** - Add/delete categories dynamically

## Project Structure

```
online-recycling-marketplace/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.module.css
│   │   ├── Sidebar.js
│   │   ├── Sidebar.module.css
│   │   ├── ProtectedRoute.js
│   │   └── AdminProtectedRoute.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   ├── ItemContext.js
│   │   ├── AdminContext.js
│   │   └── ThemeContext.js
│   ├── data/
│   │   └── dummyData.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── HomePage.module.css
│   │   ├── user/
│   │   │   ├── UserLogin.js
│   │   │   ├── UserRegister.js
│   │   │   ├── UserDashboard.js
│   │   │   ├── PostItem.js
│   │   │   ├── TrackStatus.js
│   │   │   └── *.module.css
│   │   └── admin/
│   │       ├── AdminLogin.js
│   │       ├── AdminDashboard.js
│   │       ├── ControlPanel.js
│   │       ├── PaymentOverview.js
│   │       └── *.module.css
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open Browser**
   - The app will automatically open at `http://localhost:3000`

## Usage

### For Users

1. **Register/Login**
   - Navigate to "Register" to create a new account
   - Or use "Login" if you already have an account

2. **Post Items**
   - Click "Post New Item" from the dashboard
   - Fill in item details (title, description, category, quantity, location)
   - Optionally upload an image
   - Submit for admin approval

3. **Track Status**
   - Go to "Track Status" to see all your posted items
   - Edit or delete items as needed
   - Monitor pickup status updates

4. **Browse Items**
   - Use the dashboard to browse all approved items
   - Filter by category or search by keywords

### For Admins

1. **Login**
   - Go to Admin Login page
   - Use credentials: `admin@recycling.com` / `admin123`

2. **Dashboard**
   - View statistics and charts
   - See all posted items in a table format
   - Filter by category or status

3. **Control Panel**
   - Approve or reject pending items
   - Update pickup status (Pending → In Progress → Completed)
   - Add or delete categories
   - View all registered users

4. **Payment Overview**
   - View all reward payments
   - Mark payments as "PAID" when sent
   - Filter by payment status

## Data Storage

All data is stored in **localStorage**:
- `recycling_users` - User accounts
- `recycling_items` - Posted recyclable items
- `recycling_categories` - Available categories
- `recycling_rewards` - Reward points records
- `recycling_current_user` - Current user session
- `recycling_admin_session` - Admin session
- `recycling_theme` - Theme preference (light/dark)

## Default Data

The application comes with sample data:
- 4 sample recyclable items
- Default categories: Paper, Plastic, Metal, E-waste

## Technologies Used

- **React 18** - UI library
- **React Router DOM 6** - Routing
- **Context API** - State management
- **Chart.js** - Data visualization
- **CSS Modules** - Component styling
- **localStorage** - Data persistence

## Features Breakdown

### Authentication
- User registration with email/password
- User login/logout
- Admin login (hardcoded credentials)
- Protected routes for authenticated users
- Session persistence via localStorage

### Item Management
- Create, read, update, delete items
- Image upload (base64 encoding)
- Category assignment
- Status tracking
- Approval workflow

### Reward System
- Automatic point calculation based on category and quantity
- Points awarded when item status changes to "Completed"
- Payment status tracking (PENDING/PAID)
- User point totals

### Admin Features
- Item approval/rejection
- Status management
- Category CRUD operations
- User list view
- Payment management
- Charts and analytics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- This is a **front-end only** application with no backend
- All data persists in browser localStorage
- Images are stored as base64 strings
- Admin credentials are hardcoded (not secure for production)
- No real payment processing (status tracking only)

## Future Enhancements

- Backend integration
- Real database storage
- Email notifications
- Image optimization
- Advanced search filters
- User profiles
- Rating system
- Pickup scheduling

## License

This project is open source and available for educational purposes.

## Contact

For questions or issues, please refer to the project documentation.

