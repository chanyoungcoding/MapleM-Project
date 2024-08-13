"use client";

import React, { useEffect, useState } from 'react'
import { getNoticeDetail, getNoticeEventDetail, getNoticePatchDetail } from '@/app/_apis/notification';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
}

interface detailData {
  title: string;
  url: string;
  contents: string;
  date: string;
  notice_tag: null
};

const page:React.FC<PageProps> = (props) => {
  console.log(props.searchParams.mainTitle)
  const [noticeDetail, setNoticeDetail] = useState<detailData | null>(null);

  const id = parseInt(props.params.id);
  const title = props.searchParams.mainTitle;

  useEffect(() => {
    const fetchNoticeDetail = async () => {
      try {
        let data = null;
        
        if (title === "공지사항") {
          data = await getNoticeDetail(id);
        } else if (title === "패치노트") {
          data = await getNoticePatchDetail(id);
        } else if (title === "이벤트") {
          data = await getNoticeEventDetail(id);
        }
        
        if (data) {
          setNoticeDetail(data);
        }

      } catch (e) {
        console.log(e);
      }
    };

    fetchNoticeDetail();
  }, [id, title]);

  const unescapedContents = (contents: string) => {
    const content = contents.replace(/\\\"/g, '"').replace(/\\n/g, '');
    return content
  }

  return (
    <div className='max-w-[650px] m-auto pt-[80px]'>
      {noticeDetail && (
        <div dangerouslySetInnerHTML={{ __html: unescapedContents(noticeDetail.contents) }} />
      )}
    </div>
  )
}

export default page