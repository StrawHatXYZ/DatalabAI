"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import DatasetHeader from "../components/DatasetHeader";
import { motion } from "framer-motion";

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

    // Random dataset strings and prompts
    const rows = [
        { string: "Lorem ipsum dolor sit amet", prompt: "Consectetur adipiscing elit" },
        { string: "Sed do eiusmod tempor incididunt", prompt: "Ut labore et dolore magna aliqua" },
        { string: "Ut enim ad minim veniam", prompt: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" },
        { string: "Duis aute irure dolor in reprehenderit", prompt: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
        { string: "Excepteur sint occaecat cupidatat non proident", prompt: "Sunt in culpa qui officia deserunt mollit anim id est laborum" },
        { string: "Lorem ipsum dolor sit amet", prompt: "Consectetur adipiscing elit" },
        { string: "Sed do eiusmod tempor incididunt", prompt: "Ut labore et dolore magna aliqua" },
        { string: "Ut enim ad minim veniam", prompt: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" },
        { string: "Duis aute irure dolor in reprehenderit", prompt: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur" },
        { string: "Excepteur sint occaecat cupidatat non proident", prompt: "Sunt in culpa qui officia deserunt mollit anim id est laborum" },
    ];

    // Mock dataset attributes
    const datasetAttributes = {
        downloadsLastMonth: 1000,
        numberOfRows: 5000,
        tags: ["NLP", "Machine Learning", "Data Science"],
        otherAttributes: {
            
            // Add more attributes as needed
        },
    };

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col">
            <DatasetHeader datasetName={id} />
            <div className="container mx-auto mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md p-6"
                >
                    <h1 className="text-3xl font-bold mb-4">Dataset Viewer</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="overflow-x-auto">
                            <table className="w-full table-fixed border-collapse border border-gray-400 bg-white rounded-lg shadow-md">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border border-gray-400 px-4 py-2 w-1/2">String</th>
                                        <th className="border border-gray-400 px-4 py-2 w-1/2">Prompt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                            <td className="border border-gray-400 px-4 py-2">{row.string}</td>
                                            <td className="border border-gray-400 px-4 py-2">{row.prompt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-xl font-semibold mb-4">Dataset Attributes</h2>
                                <p className="mb-2">Downloads Last Month: {datasetAttributes.downloadsLastMonth}</p>
                                <p className="mb-2">Number of Rows: {datasetAttributes.numberOfRows}</p>
                                <p className="mb-2">Tags: {datasetAttributes.tags.join(", ")}</p>
                                {/* Add other dataset attributes */}
                            </div>
                            {/* Add additional information or actions */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dataset;
