"use client"

import Image from "next/image"
import { useState } from "react"

const MapleSearch = () => {

  const [name, setName] = useState("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mapleName = e.target.value;
    setName(mapleName)
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      console.log(name)
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
        className="p-4 rounded-md bg-maple-dark border-maple-green border-2 w-96"
      />
    </div>
  )
}

export default MapleSearch