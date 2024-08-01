
import MapleSearch from "../_components/maple-search";
import MapleButton from "../_components/maple-button";
import MapleNoticeDetail from "../_components/maple-noticeDetails";

export default function Home() {

  return (
    <>
      <div className="relative bg-main-image bg-cover bg-center h-[60vh]">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <MapleSearch/>
      </div>

      <div className="bg-maple-gray relative rounded-2xl top-[-100px] m-8 p-5 shadow-custom">
        <div className="bg-white rounded-2xl shadow-custom">

          <p className="pb-6 border-b-2 border-gray-300 p-6">공지 정보</p>

          <div className="p-4">
            <MapleButton>공지사항</MapleButton>
            <MapleButton>패치노트</MapleButton>
            <MapleButton>진행 중인 이벤트</MapleButton>
          </div>

          <div className="bg-[#F0F3F5] h-5"></div>

          <div className="pb-6">
            <MapleNoticeDetail/>
            <MapleNoticeDetail/>
            <MapleNoticeDetail/>
            <MapleNoticeDetail/>
            <MapleNoticeDetail/>
          </div>

        </div>
      </div>
    </>
  );
}
