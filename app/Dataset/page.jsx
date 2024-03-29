"use client";

import { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import DatasetHeader from "../components/DatasetHeader";
import { motion } from "framer-motion";

const Dataset = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const downloads = searchParams.get('downloads');
    const Tags = searchParams.get('tags');
    console.log("Tags:", Tags);  
    console.log("Dataset ID:", id);
    

    const [data, setData] = useState(null);
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);
    const [attributes,setAttributes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://us-central1-sandbox-410710.cloudfunctions.net/dataset_download?dataset_id=` + id);
                console.log("Fetched data:", response.data);
                setData(response.data);

                if (response.data) {
                    const columnNames = Object.keys(response.data['features']);
                    setColumns(columnNames);
                    console.log("Columns:", columnNames);
                    setRows(response.data['demo']);
                    console.log("Rows:", rows);
                    console.log(response.data['config']['dataset_size']);
                    console.log(response.data['config']['download_size']);
                    setAttributes({
                        row_size: response.data['config']['dataset_size'],
                        download_size: downloads,
                        tags:Tags
                    });
                }

                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // Set loading to false on error as well
            }
        };

        fetchData();
    }, [id]);

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
                    {loading ? ( // Conditionally render loading message or spinner
                        <p>Loading...</p>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-400 bg-white rounded-lg shadow-md">
                                    <thead className="bg-gray-200">
                                        <tr>
                                            {columns.map((columnName, index) => (
                                                <th key={index} className="border border-gray-400 px-4 py-2">{columnName}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((row, rowIndex) => (
                                            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                                {columns.map((columnName, columnIndex) => (
                                                    <td
                                                        key={columnIndex}
                                                        className={`border border-gray-400 px-4 py-2 ${row[columnName].length > 50 ? 'table-cell' : 'table-cell-expanded'}`}
                                                    >
                                                        {typeof row[columnName] === 'object' ? JSON.stringify(row[columnName]) : row[columnName]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-col">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h2 className="text-xl font-semibold mb-4">Dataset Attributes</h2>
                                    <p className="mb-2">Downloads: {attributes.download_size}</p>
                                    <p className="mb-2">Number of Rows: {attributes.row_size}</p>
                                    <p className="mb-2">Tags: {attributes.Tags}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Dataset;
