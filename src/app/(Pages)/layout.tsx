import Image from "next/image"

interface Layout {
  children: React.ReactNode
}

const layout:React.FC<Layout> = ({children}) => {
  return (
    <>
    <div className="flex items-center bg-main p-[10px]">
      <Image src="/maplepet.png" alt="title" priority width={75} height={75} layout="fixed"/>
      <p className="pl-4 text-white font-bold text-2xl">MapleM</p>
    </div>
    {children}
    </>
  )
}

export default layout