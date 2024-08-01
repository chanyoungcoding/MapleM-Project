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
      <Image className='cursor-pointer' src="/maplepet.png" alt="title" priority width={75} height={75} layout="fixed"/>
      <p className="pl-4 cursor-pointer text-white font-bold text-2xl">MapleM</p>
    </div>
  )
}

export default MapleNavbar