
const DatasetHeader = ({datasetName}) => {
    return(
        <div className="flex flex-row border-2 mt-0border-white bg-white">
            
              <div className="card-container rounded mt-10 mb-5">
                <div className="flex flex-row items-center justify-between mt-4 p-4 card-content transition duration-300 ease-in-out transform hover:translate-y-1 ml-20">
                    <div className="flex items-center flex-grow-0 flex-shrink-0 justify-end"> 
                        <div className="flex flex-col ml-3">
                            <h1 className="text-2xl"> Dataset: {datasetName} </h1>
                            <h2 className="text-gray-500 text-sm mt-2"> Tags : dataset,hlknsi</h2>
                        </div>
                    </div>
                    <div className="flex flex-row ml-3 mr-28 space-x-2"> 
                        <h1 className="text-2xl mt-1 float-right md:float-left"></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DatasetHeader;
