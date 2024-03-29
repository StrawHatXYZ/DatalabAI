import { useState, useEffect } from 'react';

const DatasetHeader = ({ datasetName }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between border-2 mt-${isMobile ? 3 : 0} border-white bg-white`}>
            <div className="card-container rounded mt-10 mb-5">
                <div className="flex flex-col md:flex-row items-center justify-between p-4 card-content transition duration-300 ease-in-out transform hover:translate-y-1">
                    <div className="flex flex-col">
                        <h1 className="text-2xl"> Dataset: {datasetName} </h1>
                        <h2 className="text-gray-500 text-sm mt-2"> Tags: dataset, hlknsi</h2>
                    </div>
                    <div className="flex flex-row mt-3 md:mt-0 md:ml-3 space-x-2">
                        {/* Add any content here for desktop or mobile view */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DatasetHeader;
