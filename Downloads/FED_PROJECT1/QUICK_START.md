# Quick Start Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:3000`

## Default Credentials

### Admin Login
- **Email:** `admin@recycling.com`
- **Password:** `admin123`

### User Registration
- Create a new account from the registration page
- Or use any email/password combination

## Key Features to Test

### User Portal
1. **Register/Login** - Create an account or login
2. **Post Item** - Upload an image, set category, quantity, location
3. **Browse Items** - View all approved items, filter by category
4. **Track Status** - See your posted items, edit or delete them
5. **Points** - Earn points when items are marked as completed

### Admin Portal
1. **Login** - Use admin credentials above
2. **Dashboard** - View statistics and charts
3. **Control Panel** - Approve items, update status, manage categories
4. **Payment Overview** - Mark rewards as paid

## Sample Data

The app comes with 4 sample recyclable items:
- Old Newspapers (Paper) - Pending
- Plastic Bottles (Plastic) - Picked Up
- Aluminum Cans (Metal) - Completed
- Old Laptops (E-waste) - Pending

## Data Persistence

All data is stored in browser localStorage. To reset:
- Open browser DevTools (F12)
- Go to Application > Local Storage
- Clear all data or specific keys

## Theme Toggle

Click the moon/sun icon in the header to toggle between light and dark mode.

## Troubleshooting

- **Port already in use:** Change port by setting `PORT=3001` before `npm start`
- **Module not found:** Run `npm install` again
- **Data not persisting:** Check browser localStorage settings

