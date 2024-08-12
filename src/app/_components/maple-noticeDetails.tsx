import React from 'react'

interface Notice {
  title: string;
  url: string;
  notice_id: number;
  date: string;
}

const MapleNoticeDetail:React.FC<Notice> = ({title, url, notice_id, date}) => {

  const onClickUrl = () => {
    window.open(url, '_blank');
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
    const day = date.getDate();
    return `${month}월 ${day}일`;
  };

  return (
    <div className='flex justify-between p-5 items-center border-b-[1px] border-gray-300'>
      <p onClick={onClickUrl} className='cursor-pointer'>{title}</p>
      <p>{formatDate(date)}</p>
    </div>
  )
}

export default MapleNoticeDetail