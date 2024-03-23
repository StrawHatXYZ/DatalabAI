"use client";

import ModelCard from '../components/ModelCard';
import { fetchDatasetsByKeyword } from '@/datasets_list';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dataset from '@/public/dataset.png';

const Datasets = () => {
    const [datasets, setDatasets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchAndSetDatasets = async () => {
            try {
                const fetchedDatasets = await fetchDatasetsByKeyword(searchQuery || 'NLP');
                console.log("Top datasets related to", searchQuery || 'NLP', ":", fetchedDatasets);
                setDatasets(fetchedDatasets);
            } catch (error) {
                console.error('Error fetching datasets:', error);
            } finally {
                setLoading(false);
            }
        };

        if (searchQuery) {
            fetchAndSetDatasets();
        }
        fetchAndSetDatasets();
    }, [searchQuery]);

    const handleSearch = () => {
        setLoading(true);
    };
    
    const handleKeyPress = (e) => { 
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="bg-gray-200  ml-20 mr-20 min-h-screen mt-20 p-4">
            <div className="flex items-center mb-4">
                <Image src={dataset} alt="datasets" width={35} height={35} />
                <h1 className="text-xl ml-2 font-medium">Datasets</h1>
            </div>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Search datasets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col space-y-4">
                    {datasets.map((dataset) => (
                        <ModelCard key={dataset.id} dataset={dataset} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Datasets;
