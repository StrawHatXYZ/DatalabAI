"use client";

import { useEffect, useState } from 'react';
import { getBounties } from '../firebase';
import Card from '../components/Card';

const Bounties = () => {
  const [bounties, setBounties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        const allBounties = await getBounties();
        const successBounties = allBounties.filter(bounty => bounty.status === 'approved'); // Filter bounties by status
        setBounties(successBounties);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBounties();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-20 py-4 flex flex-col">
      <div className="flex flex-row items-center ml-24 mb-2">
        <img src="https://cdn-icons-png.flaticon.com/512/6854/6854611.png" alt="bounties" width={35} height={35} />
        <h1 className="text-xl ml-2 font-medium">Bounties</h1>
        <a href="/listing" className="ml-auto flex items-center">
          <img src="https://static-00.iconduck.com/assets.00/plus-circle-icon-512x512-qd3dnhjf.png" alt="listing" width={20} height={20} className="mr-1" />
          <span className="text-lg mr-24"> Create a Listing</span>
        </a>
      </div>
      {/* Render bounties here */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col space-y-4 w-96 ml-24 mt-10">
          {bounties.map(bounty => (
            <Card key={bounty.id} bounty={bounty} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bounties;
