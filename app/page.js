"use client";

import { useEffect, useState } from 'react';
import { getBounties } from '../app/firebase';
import Card from '../app/components/Card';
import ModelCard from './components/ModelCard';
import { fetchDatasetsByKeyword } from '../datasets_list';
import Link from 'next/link';

const Home = () => {
  const [bounties, setBounties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [datasets, setDatasets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

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

    const fetchAndSetDatasets = async (query) => {
      try {
        const fetchedDatasets = await fetchDatasetsByKeyword(query || 'NLP');
        console.log("Top 100 datasets related to", query || 'NLP', fetchedDatasets);
        setDatasets(fetchedDatasets.slice(0, 4));
      } catch (error) {
        console.error('Error fetching datasets:', error);
      }
    }; 

    // Detect if the screen size is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    
    fetchBounties();
    fetchAndSetDatasets();
    handleResize(); // Initial check for mobile view
    window.addEventListener('resize', handleResize); // Listen for window resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  const fetchAndSetDatasets = async (query) => {
    try {
      const fetchedDatasets = await fetchDatasetsByKeyword(query || 'NLP');
      console.log("Top 100 datasets related to", query || 'NLP', fetchedDatasets);
      setDatasets(fetchedDatasets.slice(0, 4));
    } catch (error) {
      console.error('Error fetching datasets:', error);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    await fetchAndSetDatasets(searchQuery);
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const displayedBounties = bounties.slice(0, 4);

  return (
    <div className={`fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-20 py-4 flex flex-col items-center ${isMobile ? 'h-screen' : 'min-h-screen'}`}>
      <div className="mt-8 mb-8 flex flex-col md:flex-row justify-between w-full max-w-4xl">
        <div className={`flex flex-col items-center space-y-2 w-full ${isMobile ? 'md:w-full' : 'md:w-48'} ${isMobile ? 'md:mr-0' : 'md:mr-4'}`}>
          <h2 className="text-lg font-semibold mb-4">Datasets</h2>
          {datasets.map(dataset => (
            <ModelCard key={dataset.id} dataset={dataset} />
          ))}
          <Link href="/Datasets">
          <p className="text-gray-600 cursor-pointer mt-4 underline hover:no-underline hover:text-blue-500">
  Browse for more
</p>
</Link>

        </div>
        <div className={`flex flex-col items-center space-y-4 w-full ${isMobile ? 'md:w-full mt-8 ' : 'md:w-48'} ${isMobile ? 'md:ml-0' : 'md:ml-4'}`}>
          <h2 className="text-lg font-semibold mb-2">Bounties</h2>
          {displayedBounties.map(bounty => (
            <Card key={bounty.id} bounty={bounty} />
          ))}
          {bounties.length > 0 ? (
          <Link href="/Bounties">
           <p className="text-gray-600 cursor-pointer mt-4 mb-2 underline hover:no-underline hover:text-blue-500">
  Browse for more
</p>
</Link>
          ) : (
            <p className="text-gray-600 mt-4 mb-2">No bounties available</p>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default Home;
