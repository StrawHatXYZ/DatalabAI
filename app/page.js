"use client";

import { useEffect, useState } from 'react';
import { getBounties } from '../app/firebase';
import Card from '../app/components/Card';
import ModelCard from './components/ModelCard';
import { fetchDatasetsByKeyword } from '../datasets_list';

const Home = () => {
  const [bounties, setBounties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [datasets, setDatasets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

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
    const fetchData = async () => {
      try {
      const response = await fetch(`https://api.publicapis.org/entries`, {
          headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
          }
      });
      const jsonData = await response.json();
      console.log("Fetched data:", jsonData);
      } catch (error) {
      console.error("Error fetching data:", error);
      }
  };
    fetchData();  
    fetchBounties();
    fetchAndSetDatasets();
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
    <div className="fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-20 py-4 flex flex-col items-center h-screen">
      <input
        type="text"
        placeholder="Search..."
        className="w-96 max-w-md m-4 p-4 text-lg rounded-full border border-gray-300 shadow-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress} // Call handleSearch when Enter key is pressed
      />
      <div className="mt-8 mb-8 flex flex-col md:flex-row justify-between w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-4 w-full md:w-48 md:mr-4">
          <h2 className="text-lg font-semibold mb-2">Datasets</h2>
          {datasets.map(dataset => (
            <ModelCard key={dataset.id} dataset={dataset} />
          ))}
        </div>
        <div className="flex flex-col items-center space-y-4 w-full md:w-48 md:ml-4">
          <h2 className="text-lg font-semibold mb-2">Bounties</h2>
          {displayedBounties.map(bounty => (
            <Card key={bounty.id} bounty={bounty} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Home;