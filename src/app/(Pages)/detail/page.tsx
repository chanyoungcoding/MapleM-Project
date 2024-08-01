import Image from "next/image"

const page = () => {
  return (
    <div>
      <div className="bg-detail-image bg-cover bg-center p-[60px]">
        <div className="relative w-[500px] m-auto bg-character-background-image bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          <div className="flex flex-col items-center relative z-50">
            <p className="mt-12 text-white text-2xl">세영공듀</p>
            <Image src="/maple-character.png" alt="캐릭터 이미지" priority width={150} height={150} layout="fixed"/>
            <p className="text-white">Lv. 181</p>

            <div className="m-5">
              <div className="flex items-center border-[1px] border-black">
                <p className="grow px-5 py-2 bg-maple-darkblue text-maple-lightblue">직업</p>
                <p className="px-5 py-2 w-[150px] bg-white text-black">다크나이트</p>
              </div>
              <div className="flex items-center border-[1px] border-t-0 border-black">
                <p className="grow px-5 py-2 bg-maple-darkblue text-maple-lightblue">전투력</p>
                <p className="px-5 py-2 w-[150px] bg-white text-black">183852</p>
              </div>
            </div>

            <p className="m-6 text-maple-gray">마지막 활동일: 07-05</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default page