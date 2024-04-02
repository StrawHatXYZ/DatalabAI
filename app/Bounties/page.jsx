"use client";
import BountyCard from '../components/bountyCard.jsx';

import { useEffect, useState } from 'react';
import { getBounties } from '../firebase';

const Bounties = () => {
  const [bounties, setBounties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        const allBounties = await getBounties();
        const successBounties = allBounties.filter(bounty => bounty.status === 'approved');
        setBounties(successBounties);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBounties();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-32">
      <div className='flex flex-row items-center justify-between'>
      <div className="flex items-center mb-4">
        <img src="https://cdn-icons-png.flaticon.com/512/6854/6854611.png" alt="bounties" width={35} height={35} />
        <h1 className="text-xl ml-2 font-medium">Bounties</h1>
      </div>
      <div>
      <a href="/listing" className="flex items-center mb-4">
        <img src="https://static-00.iconduck.com/assets.00/plus-circle-icon-512x512-qd3dnhjf.png" alt="listing" width={20} height={20} className="mr-1" />
        <span className="text-lg">Create a Bounty</span>
      </a>
      </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full">
          {bounties.map(bounty => (
            <BountyCard key={bounty.id} bounty={bounty} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bounties;
