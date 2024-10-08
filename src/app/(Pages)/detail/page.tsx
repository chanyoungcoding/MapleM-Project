"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import MapleAbility from "@/app/_components/maple-ability"
import MapleVMatrix from "@/app/_components/maple-vmetrix"
import { getUserBasicData, getUserstatData, getUserVMetrixData } from "@/app/_apis/User"
import MapleUserCard from "@/app/_components/maple-userCard"
import Image from "next/image"

interface UserData {
  character_date_last_login: string;
  character_job_name: string;
  character_level: string;
  character_name: string;
  character_date_last_logout: string;
}

interface CharacterStat {
  stat_name: string;
  stat_value: string;
}

interface VCoreEquipment {
  slot_id: string;
  slot_level: number;
  v_core_name: string;
  v_core_level: number;
}

interface VMetrixData {
  character_class: string;
  character_v_core_equipment: VCoreEquipment[];
}

const page = () => {

  const router = useRouter();

  const [userBasic, setBasicUser] = useState<UserData | null>(null);
  const [userStat, setUserStat] = useState<CharacterStat[] | null>(null);
  const [userVMetrix, setUserVMetrix] = useState<VMetrixData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const userId = sessionStorage.getItem("ocid");

      if(!userId) {
        alert("캐릭터 명을 정확히 입력해 주세요.")
        return router.push('/')
      }

      try {
        const basicUser = await getUserBasicData(userId);
        const statUser = await getUserstatData(userId);
        const vMetrixUser = await getUserVMetrixData(userId);

        setBasicUser(basicUser);
        setUserStat(statUser.stat);
        setUserVMetrix(vMetrixUser);
      } catch(e) {
        console.error(e);
        alert("데이터를 가져오는 중 오류가 발생했습니다.");
      }
    }

    getData();

  },[])

  return (
    <div>
      <div className="relative py-[140px]">
        <Image 
          src="/background_1.png"
          alt="배경 이미지"
          layout="fill" 
          objectFit="cover" 
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
          priority
        />
        <MapleUserCard 
          name={userBasic?.character_name} 
          level={userBasic?.character_level} 
          job_name={userBasic?.character_job_name} 
          logout={userBasic?.character_date_last_logout}
          power={userStat && userStat[0].stat_value}
        />
      </div>

      <div className="relative flex justify-center flex-wrap gap-5 py-24">
        <Image 
          src="/background_4.png"
          alt="배경 이미지"
          layout="fill" 
          objectFit="cover" 
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <MapleAbility stats={userStat}/>
        <MapleVMatrix VMetrix={userVMetrix}/>
      </div>

    </div>
  )
}

export default page