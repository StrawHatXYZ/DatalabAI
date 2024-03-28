import Image from "next/image";
import usdc from  "../../public/usdc.png";

const DetailHeader = ({bounty}) => {
    return(
        <div className="absolute bg-white mt-10 w-full h-39 border-b-2 border-gray-100 fixed rounded">
            <div className="card-container rounded">
                <div className="flex flex-row items-center justify-between mt-4 p-4 card-content transition duration-300 ease-in-out transform hover:translate-y-1 ml-20">
                    <div className="flex items-center flex-grow-0 flex-shrink-0 justify-end"> {/* Changed justify-between to justify-end */}
                        <img className="rounded bg-gray-200" src="https://firebasestorage.googleapis.com/v0/b/data-bounty-9a821.appspot.com/o/WhatsApp_Image_2024-02-20_at_4.27.58_PM-removebg-preview.png?alt=media&token=69b5d0e7-5129-4b42-8f17-2fce6d92d601" width={60} height={40} alt="Profile" />
                        <div className="flex flex-col ml-3">
                            <h1 className="text-2xl">{bounty.title} </h1>
                            <h2 className="text-gray-500 text-sm"> by {bounty.name}</h2>
                        </div>
                    </div>
                    <div className="flex flex-row ml-3 mr-28 space-x-2"> {/* Moved this div inside the parent flex div */}
                        <Image src={usdc} width={35} height={1}></Image>
                        <h1 className="text-2xl mt-1 float-right md:float-left">{bounty.amount}</h1>
                        <span className="text-gray-500 mt-2 text-lg">USDC</span>
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
export default DetailHeader;
