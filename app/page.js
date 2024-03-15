"use client";

import { useEffect, useState } from 'react';
import { getBounties } from '../app/firebase';
import Card from '../app/components/Card';
import ModelCard from './components/ModelCard';

const Home = () => {
  const [bounties, setBounties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        const bounties = await getBounties();
        setBounties(bounties);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBounties();
  }, []);

  const displayedBounties = bounties.slice(0, 4);

  return (
    <div className="fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-20 py-4 flex flex-col items-center h-screen">
      <h1 className="text-4xl font-semibold text-center mb-6 md:mb-12 mobile-mt-6">Welcome to DataLab AI Platform</h1> {/* Added custom class for margin-top on mobile */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-md p-3 text-lg rounded border border-gray-300 shadow-md"
      />
      <div className="mt-8 mb-8 flex flex-col md:flex-row justify-between w-full max-w-4xl"> {/* Added responsive flex direction */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-48 md:mr-4"> {/* Added responsive width and margin */}
          <h2 className="text-lg font-semibold mb-2">Model Cards</h2>
          {/* Stack of ModelCard components */}
          <ModelCard />
          <ModelCard />
          <ModelCard />
          <ModelCard />
        </div>
        <div className="flex flex-col items-center space-y-4 w-full md:w-48 md:ml-4"> {/* Added responsive width and margin */}
          <h2 className="text-lg font-semibold mb-2">Bounties</h2>
          {/* Stack of Card components */}
          {displayedBounties.map(bounty => (
            <Card key={bounty.id} bounty={bounty} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
