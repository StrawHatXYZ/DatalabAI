"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AdminDashboard from "./AdminDashboard/page";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firebase';
import { useRouter } from 'next/navigation';
import { Router } from "react-router-dom";

const RootLayout = ({ children }) => {
  const Router = useRouter();  

  const [currentUser, setCurrentUser] = useState(null);
  const [hasEffectRun, setHasEffectRun] = useState(false); // Flag to track effect execution

  useEffect(() => {
    console.log("route");
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []); // Empty dependency array means this effect runs only once

  // useEffect(() => {
  //   if (!hasEffectRun && currentUser && (currentUser.email === "obulpathi@gmail.com" || currentUser.email === "saikishore.chsk@gmail.com")) {
  //     Router.push('/AdminDashboard');
  //     setHasEffectRun(true); // Update flag after effect runs
  //   }
  // }, [currentUser, hasEffectRun]); // Include currentUser and hasEffectRun in dependencies

  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </AuthContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
