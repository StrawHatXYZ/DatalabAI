'use client';

import Link from "next/link";
import Detail_header from "../components/detail_header";
import suit from "../assets/suit.svg";
import timer from "../assets/timer.svg";
import Image from 'next/image';
import { getBounty } from "../firebase";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'HTML', 'CSS'];

const description = `
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
sapien. In non ex at velit cursus semper. Morbi odio eros, volutpat ut
turpis at, pretium luctus justo. Sed id nunc et dolor congue dapibus
sed id lacus. Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas. Vivamus aliquam dapibus feugiat.
Nulla facilisi. Nullam scelerisque nunc ac orci blandit, id dignissim
urna scelerisque. Proin rhoncus libero non justo varius, non bibendum
turpis fermentum. Nullam euismod, dui non tincidunt vestibulum, sem
lectus tincidunt felis, et laoreet lacus felis sit amet nulla. Vivamus
mollis bibendum risus, ac semper enim iaculis sed. Maecenas gravida vel
odio a vulputate. Curabitur porta quam vitae nunc rutrum, eget lacinia
nisi elementum. Nullam auctor ligula at facilisis ultrices. Sed finibus
tortor sed neque vulputate, a feugiat nisi mattis.

Integer dapibus sapien ut dapibus dapibus. Sed ac mauris nec tellus
commodo consequat. Suspendisse potenti. Phasellus vel magna arcu.
Pellentesque habitant morbi tristique senectus et netus et malesuada
fames ac turpis egestas. Maecenas ac lectus eget libero varius
vulputate. Proin varius ante nec vestibulum ultricies. Fusce
consectetur consequat sem, ac malesuada augue commodo et. Fusce eu
dui nec mi ultricies fermentum nec ac libero. Fusce vulputate dui
ac orci lobortis, a bibendum lectus hendrerit. Quisque aliquet
quam quis sapien vulputate, eu eleifend nunc tincidunt. Donec sit
amet tristique felis. Sed eu ultricies elit, a rhoncus massa.

Pellentesque habitant morbi tristique senectus et netus et malesuada
fames ac turpis egestas. Integer sit amet justo ut velit vehicula
molestie. Nulla facilisi. Quisque quis orci eu orci vehicula
hendrerit. Maecenas id tortor vel mauris bibendum finibus. Aliquam
tincidunt euismod ligula, vel vestibulum neque volutpat id. Donec ut
pellentesque elit. Integer eu lorem lectus. Curabitur dictum, felis
eget tincidunt cursus, metus sapien tristique metus, et bibendum quam
arcu eu purus."
`;

const Detail = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  console.log(id);
  const [bounty, setBounty] = useState({});
  const [reward, setReward] = useState();
  const [loading, setLoading] = useState(true);
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


  return (
    <div className="mt-16 py-4 z-40">
      <DetailHeader  bounty={bounty}/>
      <div className="absolute mt-64 flex flex-row ">
      <div className=" p-4 ml-20 w-2/3 h-fit rounded border-2 border-gray-100">
          <div className="flex">
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: bounty.description }} />
   
      </div>
    </div>
    </div>
  );
};

export default Detail;
