import Image from 'next/image'
import React, { useMemo } from 'react'
import MapleSimpleAbility from './maple-simple-ability'

interface MapleUserCardData {
  name: string | undefined;
  level: string | undefined;
  job_name: string | undefined;
  power: string | null;
  logout: string | undefined;
}

const MapleUserCard:React.FC<MapleUserCardData> = ({name, level, job_name, power, logout}) => {

  const formatDate = useMemo(() => {
    if(!logout) return "정보가 없습니다."

    const date = new Date(logout);
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0"); 
  
    return `${month}-${day}`;
  }, [logout])

  return (
    <div className="sm:w-[450px] w-[350px] relative m-auto bg-character-background-image bg-cover bg-center rounded-xl shadow-custom">
      <div className="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
      
      <div className="flex flex-col items-center relative z-50">
        <p className="mt-12 text-white text-2xl">{name}</p>
        <Image src="/maple-character.png" alt="캐릭터 이미지" priority width={100} height={100} style={{ width: "auto", height: "auto" }} />
        <p className="text-white">Lv. {level}</p>

        <MapleSimpleAbility work={job_name} ability={power}/>

        <p className="m-6 text-maple-gray">마지막 활동일: {formatDate}</p>
      </div>
    </div>
  )
}

export default MapleUserCard