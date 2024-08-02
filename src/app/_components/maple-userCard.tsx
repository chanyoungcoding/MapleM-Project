import Image from 'next/image'
import React from 'react'
import MapleSimpleAbility from './maple-simple-ability'

interface MapleUserCardData {
  name: string | undefined;
  level: string | undefined;
  job_name: string | undefined;
  power: string | null;
}

const MapleUserCard:React.FC<MapleUserCardData> = ({name, level, job_name, power}) => {
  return (
    <div className="relative w-[450px] m-auto bg-character-background-image bg-cover bg-center rounded-xl shadow-custom">
      <div className="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
      
      <div className="flex flex-col items-center relative z-50">
        <p className="mt-12 text-white text-2xl">{name}</p>
        <Image src="/maple-character.png" alt="캐릭터 이미지" priority width={100} height={100} style={{ width: "auto", height: "auto" }} />
        <p className="text-white">Lv. {level}</p>

        <MapleSimpleAbility work={job_name} ability={power}/>

        <p className="m-6 text-maple-gray">마지막 활동일: 07-05</p>
      </div>
    </div>
  )
}

export default MapleUserCard