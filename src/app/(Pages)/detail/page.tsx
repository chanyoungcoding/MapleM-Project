"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import MapleAbility from "@/app/_components/maple-ability"
import MapleSimpleAbility from "@/app/_components/maple-simple-ability"
import MapleVMatrix from "@/app/_components/maple-vmetrix"
import { getUserBasicData, getUserstatData } from "@/app/_apis/User"
import MapleUserCard from "@/app/_components/maple-userCard"

interface UserData {
  character_date_last_login: string;
  character_job_name: string;
  character_level: string;
  character_name: string;
}

interface CharacterStat {
  stat_name: string;
  stat_value: string;
}

const page = () => {

  const router = useRouter();
  
  const [userBasic, setBasicUser] = useState<UserData | null>(null);
  const [userStat, setUserStat] = useState<CharacterStat[] | null>(null);

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
        setBasicUser(basicUser);
        setUserStat(statUser.stat);
      } catch(e) {
        console.error(e);
        alert("데이터를 가져오는 중 오류가 발생했습니다.");
      }
    }

    getData();

  },[])

  return (
    <div>
      <div className="bg-detail-image bg-cover bg-center py-[140px]">
        <MapleUserCard 
          name={userBasic?.character_name} 
          level={userBasic?.character_level} 
          job_name={userBasic?.character_job_name} 
          power={userStat && userStat[0].stat_value}
        />
      </div>

      <div className="h-7 bg-white shadow-custom"></div>

      <div className="relative flex justify-center flex-wrap gap-5 py-24 bg-ability-background-image bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <MapleAbility/>
        <MapleVMatrix/>
      </div>

    </div>
  )
}

export default page