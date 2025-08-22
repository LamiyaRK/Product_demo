# 🛋️ Livora

**Livora** is a simple furniture e-commerce demo built with **Next.js 15 (App Router)** and **NextAuth.js**.  
It showcases authentication, protected routes, and product management features while keeping a clean UI and smooth user experience.

---

## 🚀 Live Demo  
[Live Site on Vercel](https://furniture-fr5cv5gf5-akabane755s-projects.vercel.app/)  

## 📂 Repository  
[GitHub Repository](https://github.com/LamiyaRK/Product_demo)  

---

## 📖 Features

### 🌐 Public Pages
- **Landing Page (`/`)**
  - Includes Navbar, Hero Section, Product Highlights, and Footer
  - Navigation to Login and Products
- **Product List Page (`/products`)**
  - Displays list of products with name, description, price
  - Each product has a **Details** button
- **Product Details Page (`/products/[id]`)**
  - View full details of a single product

### 🔒 Protected Pages
- **Add Product (`/dashboard/add-product`)**
  - Only accessible when logged in
  - Form to add a new product (stored in mock backend / database)
  - Redirects unauthenticated users to login

### 👤 Authentication
- Login with **NextAuth.js**
  -  Credentials login
  - Successful login redirects to `/products`

### ✨ Enhancements
- Toast message on successful product add


---

## 🛠️ Tech Stack
- [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/) (for styling)
- Mock API with Next.js **Route Handlers (`/api`)** or Express.js
- Deployment: [Vercel](https://vercel.com/)

---

## ⚙️ Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/LamiyaRK/Product_demo
   cd livora
2. Install dependencies

npm install


Set up environment variables
Create a .env.local file with:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000


Run the development server

npm run dev


Visit the app at: http://localhost:3000
