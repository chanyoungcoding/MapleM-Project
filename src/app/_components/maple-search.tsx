"use client"

import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

const MapleSearch = () => {

  const router = useRouter();

  const [name, setName] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mapleName = e.target.value;
    setName(mapleName)
  }

  const onKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      try {
        const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/id", {
          params: {
            character_name: "악마",
            world_name: "스카니아"
          },
          headers: {
            'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
          }
        })

        const data = res.data;
        sessionStorage.setItem("ocid", data.ocid)
        router.push(`/detail`)
      } catch(e) {
        console.log(e)
      }
    }
  }

  return (
    <div className="relative flex items-center justify-center py-52 z-20">
      <Image src="/maplepet.png" alt="title" priority width={75} height={75} layout="fixed"/>
      <input 
        type="text" 
        value={name}
        onChange={onChangeName}
        onKeyDown={onKeyPress}
        placeholder="캐릭터 명을 입력하세요." 
        className="p-4 rounded-md bg-maple-dark border-maple-green border-2 w-96 text-white"
      />
    </div>
  )
}

export default MapleSearch