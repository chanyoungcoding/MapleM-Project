
import MapleSearch from "../_components/maple-search";
import MapleNoticeBox from "../_components/maple-notice-box";

export default function Home() {

  return (
    <>
      <div className="relative bg-main-image bg-cover bg-center h-[60vh]">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <MapleSearch/>
      </div>

      <div className="sm:m-8 mt-9 bg-maple-gray relative rounded-2xl top-[-100px] p-5 shadow-custom">
        <MapleNoticeBox/>
      </div>
    </>
  );
}
