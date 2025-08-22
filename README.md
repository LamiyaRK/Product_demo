# 🛋️ Livora

**Livora** is a simple furniture e-commerce demo built with **Next.js 15 (App Router)** and **NextAuth.js**.  
It showcases authentication, protected routes, and product management features while keeping a clean UI and smooth user experience.

---

## 🚀 Live Demo  
[Live Site on Vercel](https://your-vercel-link.vercel.app)  

## 📂 Repository  
[GitHub Repository](https://github.com/your-username/livora)  

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
  - Google OAuth or Credentials login
  - Successful login redirects to `/products`

### ✨ Optional Enhancements
- Loading spinner while submitting forms
- Toast message on successful product add
- Theme toggle (Light/Dark)

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
   git clone https://github.com/your-username/livora.git
   cd livora
