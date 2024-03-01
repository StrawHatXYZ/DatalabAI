"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addBounty } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Listing = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    contact: "",
    deadline: "",
    description: "",
    cryptocurrency: "usdc",
    amount: 0,
  });

  const formFields = [
    { label: "Listing Title", type: "text", name: "title", placeholder: "Need a Car Dataset", required: true },
    { label: "Point of Contact", type: "text", name: "contact", placeholder: "https://twitter.com/elonmusk", required: true },
    { label: "Deadline", type: "datetime-local", name: "deadline", required: true },
    { label: "Description", type: "text-editor", name: "description", placeholder: "Enter a description", required: true },
    { label: "Token", type: "select", name: "token", options: ["USDC", "ETH", "BTC"], required: true },
    { label: "Amount", type: "text", name: "amount", placeholder: "Enter an amount", required: true },
  ];

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBounty(formData)
      .then(() => {
        toast.success("Bounty added successfully");
      })
      .catch((error) => {
        toast.error("Error adding bounty: " + error.message);
      });
    setFormData({
      title: "",
      pointOfContact: "",
      deadline: "",
      description: "",
      cryptocurrency: "eth",
      amount: 0,
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    console.log(formData);
  
    const requiredFields = ["title", "contact", "deadline", "description"];
    
    for (const field of requiredFields) {
      if (formData[field] === "") {
        setIsModalVisible(true);
        toast.error(`${field.charAt(0).toUpperCase() + field.slice(1)} is required`, { position: "top-right", autoClose: 3000 });
        return;
      }
    }
  
    // Update the state first before showing the success toast
    setIsModalVisible(true);
  
    addBounty(formData)
      .then(() => {
        toast.success("Bounty published successfully!", { position: "top-right", autoClose: 3000 });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        toast.error("Error adding bounty: " + error.message);
      });
};


  return (
    <div className="fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-12 py-4  flex flex-col items-center justify-center h-screen
    ">
      <span className="mt-72 text-2xl text-slate-500">Bounty Listing Form </span>
      <form className="w-3/5 mt-8 mb-36 bg-white rounded-lg shadow  p-8 ">
        {formFields.map((field, index) => (
          <div key={index} className="flex flex-col mt-4">
            <label
              className="text-base font-medium text-gray-900"
            >
              {field.label} :
            </label>
            {field.type === "select" ? (
              <select
                name={field.label}
                className="w-full mt-2 border-2 border-gray-200 rounded-md p-2 "
                onChange={(e) => setFormData({ ...formData, [field.name.toLowerCase()]: e.target.value })}
                required={field.required}
                value={formData[field.name.toLowerCase()]}
              >
                <option value="" disabled hidden>
                  Select {field.label}
                </option>
                {field.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "text-editor" ? (
              <ReactQuill
              value={formData.description}
              className="mt-2"
              onChange={(value) => setFormData((prevData) => ({ ...prevData, description: value }))}
              formats={[
                "header",
                "font",
                "size",
                "bold",
                "italic",
                "underline",
                "strike",
                "blockquote",
                "list",
                "bullet",
                "indent",
                "link",
                "image",
              ]}
            />
            ) : (
              <input
                type={field.type}
                name={field.label}
                placeholder={field.placeholder || `Enter ${field.label}`}
                className="w-full mt-2 border-2 border-gray-200 rounded-md p-2"
                onChange={(e) => setFormData({ ...formData, [field.name.toLowerCase()]: e.target.value })}
                required={field.required}
                value={formData[field.name.toLowerCase()]}
              />
            )}
          </div>
        ))}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            onClick={handleContinue}
            className="w-full px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      {isModalVisible && (
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          appendToBody={true} // Set appendToBody to true

        />      )}
    </div>
  );
};

export default Listing;
