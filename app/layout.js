"use client";

import Navbar from "./components/Navbar";
import AdminDashboard from "./AdminDashboard/page";
import "./globals.css";
import { useEffect } from "react";
import { AuthContextProvider, useAuth } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const RootLayout = ({ children }) => {
  const router = useRouter();
  const isAdminRoute = router.pathname === '/AdminDashboard';

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar/>
          {isAdminRoute ? (
            <AdminDashboard /> // Render AdminDashboard component if the route is AdminDashboard
          ) : (
            children // Render other components for non-admin routes
          )}
          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
