"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const formatDisplayName = (displayName) => {
    return displayName
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
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

  return (
    <div className="fixed  items-center top-0 w-full h-12 bg-white z-40 sborder-b-2 border-slate-200 mb-12 bg-yellow-50">
      <div className="flex items-center justify-between nav">
        <div>
          <ul className="flex ml-10">
            <li className="mt-1">
              <img src="https://firebasestorage.googleapis.com/v0/b/data-bounty-9a821.appspot.com/o/WhatsApp%20Image%202024-02-20%20at%204.27.58%20PM.jpeg?alt=media&token=14bd86c5-9492-411c-bdf3-ed5d4798c617" width={35} height={35} alt="Logo" />
            </li>
            <li className="p-2 cursor-pointer text-lg">
              <Link href="/">Datalab AI</Link>
            </li>
            <li>
            <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
            type="search"
            id="default-search"
            className="block w-96 mt-2 w-62 h-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for Datasets, Models..."
            required
        />
    </div>
            </li>
          </ul>
        </div>
        {!user ? null : (
          <ul className="flex items-center text-base font-normal">
            <Link href="#"><li className="p-2 mr-2">Models</li></Link>
            <Link href="#"><li className="p-2 mr-2">Datasets</li></Link>
            <Link href="#"><li className="p-2 mr-2">Bounties</li></Link>
           <Link href="/listing"><li className="p-2 mr-2">Create a Listing</li></Link>
           <Link href="/datarequest"><li className="p-2">Data Request</li></Link>
            <li className="p-2 ml-4 relative" onClick={toggleDropdown}>
              <div className="cursor-pointer">
              <span>{formatDisplayName(user.displayName)}</span>
              </div>
              {showDropdown && (
                <ul className="w-48 mt-2 absolute z-10 bg-white text-gray-400 border rounded-md dropdown-container">
                  <li className="p-2 cursor-pointer">
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li className="p-2 cursor-pointer" onClick={handleSignOut}>
                    Sign out
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
        {loading ? null : !user ? (
          <ul className="flex">
            <li onClick={handleSignIn} className="p-2 cursor-pointer">
              Login
            </li>
            <li onClick={handleSignIn} className="p-2 cursor-pointer">
              Sign up
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;

