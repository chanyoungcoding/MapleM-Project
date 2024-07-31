"use client"
import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState(false);

  const onClick = () => {
    setNum(prev => !prev);
  }
  return (
    <div className="w-[400px] md:w-auto bg-blue-500 p-4">
      <p className="text-blue-400 text-xl font-bold lg:text-red-300">hello</p>
      <p className={num ? "text-blue-300" : "text-red-500"} onClick={onClick}>click</p>
    </div>
  );
}
