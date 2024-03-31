import React, { useState, useEffect } from 'react';
import { addSubmission } from '../firebase';

const Modal = ({ isOpen,bounty, onClose, onSubmit }) => {
  const [submissionLink, setSubmissionLink] = useState('');
  const [solanaWalletAddress, setSolanaWalletAddress] = useState('');
  const [submissionLinkError, setSubmissionLinkError] = useState('');
  const [solanaWalletAddressError, setSolanaWalletAddressError] = useState('');

  const handleSubmissionLinkChange = (e) => {
    setSubmissionLink(e.target.value);
    setSubmissionLinkError(''); // Clear previous error when user starts typing
  };

  const handleSolanaWalletAddressChange = (e) => {
    setSolanaWalletAddress(e.target.value);
    setSolanaWalletAddressError(''); // Clear previous error when user starts typing
  };

  const handleSubmit = () => {
    console.log(bounty);
    // Perform validation
    let hasErrors = false;
    if (!submissionLink.trim()) {
      setSubmissionLinkError('Link to Your Submission is required');
      hasErrors = true;
    }
    if (!solanaWalletAddress.trim()) {
      setSolanaWalletAddressError('Solana Wallet Address is required');
      hasErrors = true;
    }

    if (hasErrors) {
      return; // Don't submit if there are errors
    }

    addSubmission(bounty, submissionLink, solanaWalletAddress);
    // Call the onSubmit function
    // onSubmit(submissionLink, solanaWalletAddress);
    // Close the modal
    onClose();
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose(); // Close the modal if clicked outside of it
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Add event listener when modal is open
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      // Remove event listener when modal is closed
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-800 opacity-50 modal-overlay"></div>
      {/* Modal */}
      <div className="relative z-50 w-1/2 bg-white p-6 rounded-lg shadow-xl">
        <button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Modal content */}
        <h1 className="text-lg font-semibold mb-4">Submit Your Entry</h1>
        <div className="mb-4">
          <label htmlFor="submissionLink" className="block text-sm font-medium text-gray-700 mb-1">Link to Your Submission:</label>
          <input type="text" id="submissionLink" value={submissionLink} onChange={handleSubmissionLinkChange} className="border border-gray-300 rounded-md w-full px-3 py-2" required />
          {submissionLinkError && <p className="text-red-500 text-sm mt-1">{submissionLinkError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="solanaWalletAddress" className="block text-sm font-medium text-gray-700 mb-1">Solana Wallet Address:</label>
          <input type="text" id="solanaWalletAddress" value={solanaWalletAddress} onChange={handleSolanaWalletAddressChange} className="border border-gray-300 rounded-md w-full px-3 py-2" required />
          {solanaWalletAddressError && <p className="text-red-500 text-sm mt-1">{solanaWalletAddressError}</p>}
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Modal;
