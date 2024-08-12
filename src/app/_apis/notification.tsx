import axios from "axios"

export const getNotice = async () => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/notice", {
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}

export const getNoticeDetail = async (id: number) => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/notice/detail", {
    params: {
      notice_id: id
    },
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  }) 
  return res.data
}

export const getNoticePatch = async () => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/notice-patch", {
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}

export const getNoticePatchDetail = async (id: number) => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/notice-patch/detail", {
    params: {
      notice_id: id
    },
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}

export const getNoticeEvent = async () => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/notice-event", {
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}

export const getNoticeEventDetail = async (id: number) => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/notice-event/detail", {
    params: {
      notice_id: id
    },
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}


