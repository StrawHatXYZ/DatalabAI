"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AdminDashboard from "./AdminDashboard/page";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';
import { usePathname,redirect } from 'next/navigation'
 // Import the auth object from your firebase file

const RootLayout = ({ children }) => {
  const pathname = usePathname()
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log("route");
    console.log(pathname);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  useEffect(() => {
    // Redirect to home if the user is not logged in
    if (!currentUser && pathname === '/AdminDashboard') {
       redirect('/');
    }
    // Redirect to home if the user is not an admin
    if (currentUser && currentUser.email !== "obulpathi@gmail.com" && pathname === '/AdminDashboard') {
      redirect('/');
    }
  }, [pathname, currentUser]);

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {/* Render AdminDashboard or Home based on the route */}
          {pathname === '/AdminDashboard'|| '/' && currentUser && currentUser.email === "obulpathi@gmail.com" || "saikishore.chsk@gmail.com" ? (
            <AdminDashboard />
          ) : (
            children
          )}
          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
