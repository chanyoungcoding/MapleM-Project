"use client";

import React, { useEffect, useState } from 'react'
import MapleButton from './maple-button'
import MapleNoticeDetail from './maple-noticeDetails'
import { 
  getNotice, 
  getNoticeEvent, 
  getNoticePatch, 
} from '../_apis/notification'

interface Notice {
  title: string;
  url: string;
  notice_id: number;
  date: string;
  notice_tag: string | null;
}

const MapleNoticeBox = () => {

  const [notice, setNotice] = useState<Notice[] | null>(null);
  const [title, setTitle] = useState("공지사항");

  useEffect(() => {
    onPatchData("공지사항");
  }, [])

  const onPatchData = async (value: string) => {
    try {
      let data;
      let title;

      switch(value) {
        case "공지사항":
          data = await getNotice();
          title = "공지사항";
          break;
        
        case "패치노트":
          data = await getNoticePatch();
          title = "패치노트";
          break;

        case "이벤트":
          data = await getNoticeEvent();
          title = "이벤트";
          break;
        
        default:
          throw new Error("유효하지 않은 값 입니다.");
      }

      setNotice(data.notice || data.patch_notice || data.event_notice);
      setTitle(title);

    } catch(e) {
      console.error(e);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-custom">

      <p className="pb-6 border-b-2 border-gray-300 p-6">공지 정보</p>

      <div className="p-4">
        <MapleButton click={() => onPatchData("공지사항")}>공지사항</MapleButton>
        <MapleButton click={() => onPatchData("패치노트")}>패치노트</MapleButton>
        <MapleButton click={() => onPatchData("이벤트")}>진행 중인 이벤트</MapleButton>
      </div>

      <div className="bg-[#F0F3F5] h-5"></div>

      <div className="pb-6">
        {notice && notice.map((item, index) => (
          <MapleNoticeDetail 
            key={index}
            title={item.title}
            url={item.url}
            notice_id={item.notice_id}
            date={item.date}
            main_title={title}
          />
        ))}
      </div>

    </div>
  )
}

export default MapleNoticeBox