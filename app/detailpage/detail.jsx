"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Modal from "../components/Modal";
import DetailHeader from "../components/DetailHeader";
import suit from "../assets/suit.svg";
import timer from "../assets/timer.svg";
import twitter from "../../public/twitter.png";
import Image from 'next/image';
import { getBounty } from "../firebase";
import { useSearchParams } from 'next/navigation'
import parse from 'html-react-parser';

const Detail = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  console.log(id);
  const [bounty, setBounty] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchBounty = async () => {
      try {
        const bounty = await getBounty(id);
        setBounty(bounty);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBounty();
  }, []);

  const formatDeadline = (deadline) => {
    const diff = new Date(deadline) - new Date();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}d:${hours}h:${minutes}m`;
  };

  return (
    <div className="">
      <DetailHeader  bounty={bounty} />
      <div className="absolute mt-64 flex flex-row">
        <div className="p-4 bg-white rounded-lg ml-20 w-2/3 h-fit rounded border-2 border-gray-100">
          <div className="flex"></div>
          <div>{parse(String(bounty.description))}</div>
        </div>
        <div className="flex flex-col ml-4">
          <div className="bg-white p-4 ml-10 mr-4 w-96 h-fit rounded border-2 border-gray-100">
            <div className="flex flex-row space-x-40"> 
              <div className="flex flex-row">
                <Image src={suit} alt="suit" width={25} height={25} />
                <h1 className="text-xl ml-2">{bounty.submissions}</h1>
              </div>
              <div className="flex flex-row ">
                <Image src={timer} alt="timer" width={25} height={25} />
                <h1 className="text-xl ml-2">{formatDeadline(bounty.deadline)}</h1>
              </div>
            </div>
            <div className="flex flex-row space-x-32"> 
              <div className="flex flex-row">
                <h1 className="text-xl  mt-2 text-gray-400 ">Submissions</h1>
              </div>
              <div className="flex flex-row ">
                <h1 className="text-xl mt-2 text-gray-400">Remaining</h1>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded mt-4 w-80" onClick={handleOpenModal}>
                Submit Now
              </button>
            </div>
          </div>
          <div className="bg-white flex flex-col p-4 ml-10 w-96 mt-10 h-fit rounded border-2 border-gray-100">
            <span className="text-gray-400">CONTACT</span>
            <span className="flex items-center mt-4 space-x-2">
              <Image src={twitter} alt="suit" width={25} height={25} />
              {bounty.contact && (
                <Link href={bounty.contact}>
                  <span className="text-blue-500 hover:underline">{bounty.name}</span>
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} bounty={id} onClose={handleCloseModal}>
        <h1>Modal Content</h1>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default Detail;
