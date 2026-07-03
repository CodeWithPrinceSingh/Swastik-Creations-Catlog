# 🌸 Swastik Creations Catalog

A modern MERN Stack bridal and saree catalog website for **Swastik Creations**. The application provides an elegant frontend for customers and a powerful backend API for managing products, categories, reviews, store information, and more.

---

## 🚀 Features

### Customer Features

- Premium responsive UI
- Browse products by category
- Product search
- Product details page
- Wishlist
- Customer reviews
- Contact page
- Store information
- SEO-friendly URLs
- Dynamic Sitemap
- Robots.txt support

### Admin Features

- Secure Admin Login
- Product Management
- Category Management
- Store Information Management
- Review Management
- API-based architecture

---

# 🛠 Tech Stack

## Frontend

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Morgan
- CORS

---

# 📁 Project Structure

```
Swastik-Creations-Catlog
│
├── client/                # React Frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── server/                # Express Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/Swastik-Creations-Catlog.git

cd Swastik-Creations-Catlog
```

---

## Install Frontend

```bash
cd client

npm install
```

---

## Install Backend

```bash
cd ../server

npm install
```

---

# ▶ Running the Project

## Start Backend

```bash
cd server

npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd client

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔐 Environment Variables

## Client (.env)

```env
VITE_API_URL=http://localhost:5000
```

---

## Server (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

DATA_SOURCE=mongo
```

---

# 📦 Available Scripts

## Client

```bash
npm run dev
npm run build
npm run preview
```

## Server

```bash
npm run dev
npm start
npm run seed
npm run import-products
npm run import-categories
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/login
```

## Products

```
GET /api/products
GET /api/products/:id
```

## Categories

```
GET /api/category
```

## Search

```
GET /api/search
```

Additional APIs are available for:

- Wishlist
- Reviews
- Contact
- Store Information
- Testimonials
- Admin

---

# 🔍 SEO Features

- Dynamic Sitemap.xml
- Robots.txt
- Clean URLs
- Search Engine Friendly Structure

---

# 🎨 UI Highlights

- Responsive Design
- Mobile Friendly
- Fast Loading
- Modern Bridal Theme
- Premium Product Layout
- Tailwind CSS Styling

---

# 🛡 Security

- JWT Authentication
- Password Hashing using bcrypt
- Environment Variable Protection
- CORS Enabled

---

# 📸 Screenshots

Add screenshots here.

```
screenshots/
    home.png
    products.png
    product-details.png
    admin.png
```

---

# 🚀 Deployment

Frontend can be deployed on:

- Vercel
- Netlify

Backend can be deployed on:

- Render
- Railway
- VPS
- DigitalOcean

MongoDB:

- MongoDB Atlas

---

# 👨‍💻 Developed By

**Prince Kumar Singh**

Swastik Creations

---

# 📄 License

This project is developed for Swastik Creations.

All Rights Reserved © 2026.
