"use client";
import ModelCard from "../app/components/ModelCard";
import BountiesPage from "./BountiesPage/page";
import { getBounties } from '../app/firebase';
import { useEffect, useState } from 'react';

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

  // Display only the first four bounties
  const displayedBounties = bounties.slice(0, 4);

    return (
      <div className="mt-20 text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome to the Datalab AI platform</h1>
        </div>
        <div className="flex item-center justify-center mt-10">
          <div className="mt-10 ml-12 item-center justify-center text-center">
            <span className="ml-2 text-lg text-gray-500">Bounties</span>
            <BountiesPage></BountiesPage>
            <p className="text-gray-500 mt-10 cursor-pointer underline">Browse for more</p>
          </div>
          <div className="mt-10 ml-12 item-center justify-center text-center">
            <span className="ml-2 text-lg text-gray-500">Datasets</span>
            <ModelCard></ModelCard>
            <ModelCard></ModelCard>
            <ModelCard></ModelCard>
            <ModelCard></ModelCard>
            <ModelCard></ModelCard>
            <p className="text-gray-500 mt-10 cursor-pointer underline">Browse for more</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;