"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const isAdmin = user && user.email === "challapallisaikrishnakishore@gmail.com"; // Check if user is admin
  const router = useRouter();

  const formatDisplayName = (displayName) => {
    return displayName
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      console.log(user.email);
      localStorage.setItem("user", user.displayName);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest(".dropdown-container")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  useEffect(() => {
    if (isAdmin) {
      router.push("/AdminDashboard"); // Redirect to AdminDashboard if admin
    }
  }, [isAdmin]);

  return (
    <div className="fixed top-0 w-full bg-white shadow-lg z-40">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-4 px-4">
          <img src="https://firebasestorage.googleapis.com/v0/b/data-bounty-9a821.appspot.com/o/WhatsApp%20Image%202024-02-20%20at%204.27.58%20PM.jpeg?alt=media&token=14bd86c5-9492-411c-bdf3-ed5d4798c617" width={35} height={35} alt="Logo" />
          <Link href="/" className="text-xl font-bold text-gray-800">Datalab AI</Link>
        </div>
        <div className="flex items-center space-x-4 mr-4 lg:hidden">
          {/* Mobile menu icon */}
          <div onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="text-gray-800 cursor-pointer"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-gray-800 cursor-pointer"
              />
            )}
          </div>
        </div>
        <ul className="hidden lg:flex items-center space-x-8 text-gray-800">
          {/* Rest of the navigation links */}
          {!user ? (
            <>
              <li onClick={handleSignIn} className="cursor-pointer">Login</li>
              <li onClick={handleSignIn} className="cursor-pointer">Sign up</li>
            </>
          ) : (
            <>
              <li><Link href="/Datasets">Datasets</Link></li>
              <li><Link href="/Bounties">Bounties</Link></li>
              <li className="cursor-pointer relative" onClick={toggleDropdown}>
                <span className="flex items-center space-x-2">
                  <span>{formatDisplayName(user.displayName)}</span>
                  <FontAwesomeIcon icon={faUser} className="text-gray-500 text-xl" /> {/* Larger user icon */}
                </span>
                {/* Dropdown menu */}
                {showDropdown && (
                  <ul className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <li className="cursor-pointer flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-colors">
                      <Link href="/profile">Profile</Link>
                      <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                    </li>
                    <li className="cursor-pointer flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-colors">
                      <Link href="/settings">Settings</Link>
                      <FontAwesomeIcon icon={faCog} className="text-gray-500" />
                    </li>
                    <li className="cursor-pointer flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition-colors" onClick={handleSignOut}>
                      Sign out
                      <FontAwesomeIcon icon={faSignOutAlt} className="text-gray-500" />
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Render mobile menu */}
      {isMobileMenuOpen && (
        <div className="bg-white py-4 lg:hidden">
          <ul className="flex flex-col items-center space-y-4 text-gray-800">
            {/* Rest of the navigation links */}
            {!user ? (
              <>
                <li onClick={handleSignIn} className="cursor-pointer">Login</li>
                <li onClick={handleSignIn} className="cursor-pointer">Sign up</li>
              </>
            ) : (
              <>
                <li><Link href="/Datasets">Datasets</Link></li>
                <li><Link href="/Bounties">Bounties</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li onClick={handleSignOut} className="cursor-pointer">Sign out</li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
