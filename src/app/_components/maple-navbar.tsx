"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const MapleNavbar = () => {

  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <div onClick={onClick} className="flex items-center bg-maple-dark p-[5px] shadow-custom fixed z-[9999] w-full">
      <Image className='cursor-pointer' src="/maplepet.png" alt="title" priority width={60} height={60} style={{ width: "auto", height: "auto" }}/>
      <p className="pl-4 cursor-pointer text-white font-bold text-2xl">Maple M Info</p>
    </div>
  )
}

export default MapleNavbar