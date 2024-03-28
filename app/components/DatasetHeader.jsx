import Image from "next/image";

const DatasetHeader = () => {
    return(
        <div className="absolute bg-white mt-12 w-full h-39 border-b-2 border-gray-100 fixed rounded">
            <div className="card-container rounded">
                <div className="flex flex-row items-center justify-between mt-4 p-4 card-content transition duration-300 ease-in-out transform hover:translate-y-1 ml-20">
                    <div className="flex items-center flex-grow-0 flex-shrink-0 justify-end"> {/* Changed justify-between to justify-end */}
                        <div className="flex flex-col ml-3">
                            <h1 className="text-2xl">Datasets:awesome-chatgpt-prompts </h1>
                            <h2 className="text-gray-500 text-sm">Tags : chatgpt, crossiant</h2>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mb-2 mt-6 w-full"></hr>
            <div className="h-8 ml-24 w-14 border-b-4 border-indigo-200 border-b-indigo-500 ">
                <a className="text-center" href="">Details</a>
            </div>
        </div>
    );
}
export default DatasetHeader;
