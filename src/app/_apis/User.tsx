import axios from "axios"

export const getUserBasicData = async (id: string) => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/character/basic", {
    params: {
      ocid: id
    },
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}

export const getUserstatData = async (id: string) => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/character/stat", {
    params: {
      ocid: id
    },
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}

export const getUserVMetrixData = async (id: string) => {
  const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/character/vmatrix", {
    params: {
      ocid: id
    },
    headers: {
      'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
    }
  })
  return res.data
}
