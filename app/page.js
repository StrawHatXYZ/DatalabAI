"use client";
import ModelCard from "../app/components/ModelCard";
import BountiesPage from "./BountiesPage/page";
import { getBounties } from '../app/firebase';
import { useEffect, useState } from 'react';
// Assuming fetchDatasetsByKeyword is imported or available in this scope
import { fetchDatasetsByKeyword } from '../datasets_list';

const Home = () => {
  const [bounties, setBounties] = useState([]);
  const [datasets, setDatasets] = useState([]); // State to hold fetched datasets
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBounties = async () => {
      try {
        const bounties = await getBounties();
        setBounties(bounties);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAndSetDatasets = async () => {
      try {
        const fetchedDatasets = await fetchDatasetsByKeyword('NLP'); // Adjust keyword as needed
        console.log("Top 100 datasets related to",fetchedDatasets);
        setDatasets(fetchedDatasets);
      } catch (error) {
        console.error('Error fetching datasets:', error);
      }
    };

    fetchBounties();
    fetchAndSetDatasets().then(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mt-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Datalab AI platform</h1>
      
      <div className="flex items-center justify-center mt-10">


      {/* <div className="flex item-center justify-center mt-10">
          <div className="mt-10 item-center justify-center text-center">
            <span className="ml-2 text-lg text-gray-500">Models</span>
            <ModelCard></ModelCard>
            <ModelCard></ModelCard>
            <ModelCard></ModelCard>
            <ModelCard></ModelCard>
            <ModelCard></ModelCard>
            <p className="text-gray-500 mt-10 cursor-pointer underline">Browse for more</p>
      </div> */}

        <div>
          <span className="ml-2 text-lg text-gray-500">Datasets</span>
          {datasets.map((dataset, index) => (
            <ModelCard key={index} dataset={dataset} /> // Pass dataset as prop to ModelCard
          ))}
          <p className="text-gray-500 mt-10 cursor-pointer underline">Browse for more</p>
        </div>
         
        <div className="mt-10 ml-12 item-center justify-center text-center">
            <span className="ml-2 text-lg text-gray-500">Bounties</span>
            <BountiesPage></BountiesPage>
            <p className="text-gray-500 mt-10 cursor-pointer underline">Browse for more</p>
        </div>

        {/* Other sections for Bounties, etc. */}
      </div>
    </div>
  );
};

export default Home;
