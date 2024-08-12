"use client";

import React, { useEffect, useState } from 'react'
import MapleButton from './maple-button'
import MapleNoticeDetail from './maple-noticeDetails'
import { 
  getNotice, 
  getNoticeDetail, 
  getNoticeEvent, 
  getNoticeEventDetail, 
  getNoticePatch, 
  getNoticePatchDetail 
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

  useEffect(() => {
    onNoticeClick();
  }, [])

  const onNoticeClick = async () => {
    try {
      const data = await getNotice();
      setNotice(data.notice);
    } catch(e) {
      console.error(e)
    }
  }

  const onPatchClick = async () => {
    try {
      const data = await getNoticePatch();
      setNotice(data.patch_notice);
    } catch(e) {
      console.error(e)
    }
  }

  const onEventClick = async () => {
    try {
      const data = await getNoticeEvent();
      setNotice(data.event_notice);
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-custom">

      <p className="pb-6 border-b-2 border-gray-300 p-6">공지 정보</p>

      <div className="p-4">
        <MapleButton click={onNoticeClick}>공지사항</MapleButton>
        <MapleButton click={onPatchClick}>패치노트</MapleButton>
        <MapleButton click={onEventClick}>진행 중인 이벤트</MapleButton>
      </div>

      <div className="bg-[#F0F3F5] h-5"></div>

      <div className="pb-6">
        {notice && notice.map(item => (
          <MapleNoticeDetail 
            title={item.title}
            url={item.url}
            notice_id={item.notice_id}
            date={item.date}
          />
        ))}
      </div>

    </div>
  )
}

export default MapleNoticeBox