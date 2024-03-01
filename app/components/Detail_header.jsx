const Detail_header = ({bounty}) => {
    return(
        <div className="absolute mt-14 w-full h-39 border-b-2  border-gray-100 fixed rounded">
      <div className="card-container rounded">
        <div className="flex flex-row items-center justify-between mt-4 p-4 card-content transition duration-300 ease-in-out transform hover:translate-y-1 ml-20">
          <div className="flex items-center flex-grow-0 flex-shrink-0">
            <img className="rounded" src="https://pbs.twimg.com/profile_images/1679100194028392448/4_3L1nRh_400x400.jpg" width={60} height={40} alt="Profile" />
            <div className="flex flex-col ml-3">
              <h1 className="text-lg">{bounty.title} </h1>
              <h2 className="text-gray-500 text-sm"> by {bounty.name}</h2>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-2 mt-6  w-full"></hr>
        <div className="h-8 ml-24 w-14  border-b-4 border-indigo-200 border-b-indigo-500 ">
          <a className="text-center" href="">Details</a>
        </div>
    </div>
    );
}
export default Detail_header;