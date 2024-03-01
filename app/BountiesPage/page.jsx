import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getBounties } from '../firebase';

const BountiesPage = () => {
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
  const displayedBounties = bounties.slice(0, 5);

  return (
    <div className='w-fit'>
      {displayedBounties.map((bounty) => (
        <Card key={bounty.id} bounty={bounty} />
      ))}
    </div>
  );
};

export default BountiesPage;
