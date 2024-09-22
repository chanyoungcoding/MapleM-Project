"use client";

import { useRouter } from "next/navigation"
import React from 'react'

interface Notice {
  title: string;
  url: string;
  notice_id: number;
  date: string;
  main_title: string;
}

const MapleNoticeDetail:React.FC<Notice> = ({title, url, notice_id, date, main_title}) => {

  const path = useRouter();

  const onClickUrl = () => {
    path.push(`/noticedetail/${notice_id}?mainTitle=${main_title}`)
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}월 ${day}일`;
  };

  return (
    <div onClick={onClickUrl} className='flex justify-between p-5 items-center border-b-[1px] border-gray-300'>
      <p  className='cursor-pointer'>{title}</p>
      <p className="sm:pl-0 pl-3">{formatDate(date)}</p>
    </div>
  )
}

export default MapleNoticeDetail