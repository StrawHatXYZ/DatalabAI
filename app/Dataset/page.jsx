"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

const Dataset = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    console.log("Dataset ID:", id);

    const [data, setData] = useState(null);

    useEffect(() => {
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
            setData(jsonData);
            } catch (error) {
            console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="fixed top-0 left-0 right-0 overflow-y-auto bg-gray-200 mt-12 py-4 flex flex-col items-center h-screen">
            {data && (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
    };
export default Dataset;