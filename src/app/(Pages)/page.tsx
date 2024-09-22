import Image from 'next/image';
import MapleSearch from "../_components/maple-search";
import MapleNoticeBox from "../_components/maple-notice-box";

export default function Home() {
  return (
    <>
      <div className="relative h-[60vh]">
        <Image 
          src="/background_2.png"
          alt="배경 이미지"
          layout="fill" 
          objectFit="cover" 
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60 z-5"></div>
        <MapleSearch />
      </div>

      <div className="sm:m-8 mt-9 bg-maple-gray relative rounded-2xl z-8 top-[-100px] p-5 shadow-custom">
        <MapleNoticeBox />
      </div>
    </>
  );
}

