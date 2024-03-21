"use client";

import ModelCard from '../components/ModelCard';
import { fetchDatasetsByKeyword } from '@/datasets_list';
import { useEffect, useState } from 'react';
const Datasets  = () => {
    const [datasets, setDatasets] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAndSetDatasets = async () => {
            try {
                const fetchedDatasets = await fetchDatasetsByKeyword('NLP'); // Assuming fetchDatasetsByKeyword returns datasets related to the keyword 'NLP'
                console.log("Top 100 datasets related to", fetchedDatasets);
                setDatasets(fetchedDatasets.slice(0, 4)); // Limit datasets to 4 items
            } catch (error) {
                console.error('Error fetching datasets:', error);
            }
        };
        fetchAndSetDatasets().then(() => setLoading(false));
    }, []);
    return (
        <div className="fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-20 py-4 flex flex-col">
             <div className="flex flex-row items-center ml-36 mb-2">
        {/* <img className="bg-gray-200" src="https://www.creativefabrica.com/wp-content/uploads/2022/03/19/dataset-glyph-colored-Style-Graphics-27448964-1-1-580x386.jpg" alt="bounties" width={35} height={35} /> */}
        <h1 className="text-xl ml-2 font-medium">Datasets</h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col space-y-4 w-96 ml-24 mt-10">
           {datasets.map(dataset => (
            <ModelCard key={dataset.id} dataset={dataset} />
          ))}
        </div>
      )}
        </div>
    );
}
export default Datasets;