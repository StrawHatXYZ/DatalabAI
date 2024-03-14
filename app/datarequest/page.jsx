"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDataset, uploadFile } from '../firebase';


const DataRequest = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const resetForm = () => {
    setTags([]);
    setTagInput('');
    setTitle('');
    setDescription('');
    setFile(null);
    setUploadedFileName(null);
  };



  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagAdd = (e) => {
    e.preventDefault();
    if (tagInput.trim() !== '') {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
  
    // Check if a file is selected
    if (selectedFile) {
      // Check if the selected file has a CSV extension
      if (selectedFile.name.toLowerCase().endsWith('.csv')) {
        setFile(selectedFile);
        setUploadedFileName(selectedFile.name); // Save the file name
      } else {
        // Display an error toast if the selected file is not a CSV file
        toast.error('Please select a valid CSV file.');
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if all required fields are filled
    if (title.trim() === '' || description.trim() === '' || tags.length === 0 || !file) {
      toast.error('Please fill all the required fields.');
      return;
    }
  
    try {
      // Upload the CSV file to Firebase Storage
      const fileDownloadURL = await uploadFile(file);
  
      // Add the dataset information to the 'datasets' collection
      const datasetId = await addDataset({
        title,
        description,
        tags,
        file: fileDownloadURL,
      });
      console.log('Dataset ID:', datasetId);
    toast.success('Form submitted successfully!');
    resetForm();
    window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-12 py-4 flex flex-col items-center h-screen">
      <span className="mt-8 text-2xl text-slate-500">Dataset Submission Form </span>
      <div className="w-8/12 mt-8 mb-12 ">
        <form className='w-full bg-white rounded-lg shadow p-8' onSubmit={handleSubmit}>
         <div className="flex flex-col mt-4">
            <label className="text-slate-500 text-lg" htmlFor="title">
                Title :
            </label>
            <input  type="text" id="title" name="title" className="border-2 border-slate-200 rounded-lg p-2 mt-2" placeholder="Enter title"   onChange={handleTitleChange}
/>
            </div>
            <div className="flex flex-col mt-4">
            <label className="text-slate-500 text-lg" htmlFor="description">
                Description :
            </label>
            <textarea id="description" name="description" className="border-2 border-slate-200 rounded-lg p-2 mt-2" placeholder="Enter description"   onChange={handleDescriptionChange}
/>
            </div>
          <div className="flex flex-col mt-4">
            <label className="text-slate-500 text-lg" htmlFor="tags">
              Tags :
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={tagInput}
              onChange={handleTagInputChange}
              onKeyDown={(e) => e.key === 'Enter' && handleTagAdd(e)}
              className="border-2 border-slate-200 rounded-lg p-2 mt-2"
              placeholder="Add tags (Press Enter to add)"
            />
          </div>
          <div className="flex flex-wrap">
              {tags.map((tag, index) => (
                <div key={index} className="bg-indigo-500 text-white rounded m-2 p-2 flex items-center">
                  <span className="mr-2">{tag}</span>
                  <button
                    type="button"
                    onClick={() => handleTagRemove(tag)}
                    className="text-white hover:text-gray-300 focus:outline-none"
                  >
                    &#x2715;
                  </button>
                </div>
              ))}
            </div>
        
            <div className="flex flex-col mt-4">
        <label className="text-slate-500 text-lg" htmlFor="file">
          File (CSV only):
        </label>
        <div className="flex items-center justify-center w-full">
        <label
  htmlFor="dropzone-file"
  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 bg-white"
  style={{ backgroundColor: "white" }} // Add this inline style
>

            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              {uploadedFileName && (
                <p className="text-xs text-gray-500 dark:text-gray-400">File: {uploadedFileName}</p>
              )}
            </div>
            <input
              id="dropzone-file"
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
          <button className="mt-8 w-full bg-indigo-500 text-white rounded p-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DataRequest;
