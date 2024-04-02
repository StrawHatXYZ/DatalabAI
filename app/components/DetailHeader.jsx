import Image from "next/image";
import usdc from "../../public/usdc.png";

const DetailHeader = ({ bounty }) => {
  return (
    <div className="bg-white bg-gray-200 mt-10 border-b-2 fixed top-0 left-0 right-0 w-full z-10">
      <div className="card-container flex flex-row justify-between rounded p-4 space-x-28">
        <div className="flex flex-row md:ml-20 ml-2 mt-10 md:justify-start w-fit space-x-2">
          <img
            className="rounded bg-gray-200"
            src="https://firebasestorage.googleapis.com/v0/b/data-bounty-9a821.appspot.com/o/WhatsApp_Image_2024-02-20_at_4.27.58_PM-removebg-preview.png?alt=media&token=69b5d0e7-5129-4b42-8f17-2fce6d92d601"
            width={60}
            height={40}
            alt="Profile"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl">{bounty.title}</h1>
            <h2 className="text-gray-500 text-sm">by {bounty.name}</h2>
          </div>
        </div>
        <div className="flex flex-row items-center mt-10 space-x-2" style={{ marginRight: '100px' }}>
          <Image src={usdc} width={35} height={45} alt="usdc logo" />
          <span className="text-2xl">{bounty.amount}</span>
          <span className="text-gray-400 text-2xl">USDC</span>
        </div>
      </div>
      <hr className="mb-2 mt-6"></hr>
      <div className="h-8 ml-24 w-14 border-b-4 border-indigo-200 border-b-indigo-500">
        <a className="text-center" href="">Details</a>
      </div>
    </div>
  );
};

export default DetailHeader;
