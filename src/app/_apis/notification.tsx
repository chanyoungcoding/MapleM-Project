import axios from "axios"

export const getNotice = async () => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/notice", {
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}

export const getNoticeDetail = async (id: string) => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/notice/detail", {
    params: {
      notice_id: id
    },
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  }) 
}
