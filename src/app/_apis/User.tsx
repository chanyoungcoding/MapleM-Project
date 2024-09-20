import axios from "axios"

export const getUserData = async (character_name: string, world_name: string) => {
  try {
    const res = await axios.get("https://open.api.nexon.com/maplestorym/v1/id", {
      params: {
        character_name,
        world_name
      },
      headers: {
        'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_M_API_KEY
      }
    });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      // 서버에서 2xx 외의 응답이 온 경우
      throw new Error("서버 또는 캐릭터 이름을 정확히 입력해 주세요.");
    } else if (error.request) {
      // 요청이 전송되었지만 응답이 없는 경우
      throw new Error("서버로부터 응답이 없습니다. 네트워크를 확인하세요.");
    } else {
      // 요청을 만들다가 오류가 발생한 경우
      throw new Error(`요청 실패: ${error.message}`);
    }
  }
};


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
