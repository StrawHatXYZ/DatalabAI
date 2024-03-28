"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import DatasetHeader from "../components/DatasetHeader";

const Dataset = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    console.log("Dataset ID:", id);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://us-central1-sandbox-410710.cloudfunctions.net/dataset_download?dataset_id=Helsinki-NLP/eitb_parcc`, {
                });
                console.log("Fetched data:", response.data);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-12 py-4 flex flex-col">
            <DatasetHeader />
        </div>
    );
};

export default Dataset;
