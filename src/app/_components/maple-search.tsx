"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import useDebounce from "../_hooks/debounce"
import { getUserData } from "../_apis/User"

const fetchDataFromServer = (value: string): string[] | null => {

  if (!value) return null;

  // localStorage에서 저장된 검색어 목록 불러오기
  const savedSearches = localStorage.getItem("searchHistory");
  const searchHistory: string[] = savedSearches ? JSON.parse(savedSearches) as string[]: [];

  // 입력값으로 필터링
  const filteredResults = searchHistory.filter((search: string) => search.startsWith(value));

  // 중복 제거 후 결과 반환
  const uniqueResults = Array.from(new Set(filteredResults));

  return uniqueResults;
};

const MapleSearch = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [server, setServer] = useState("");
  const [result, setResult] = useState<string[] | null>([]);
  const debouncedInput = useDebounce(name, 1000);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mapleName = e.target.value;
    setName(mapleName);
  };

  const onSelectServer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setServer(e.target.value);
  };

  const onKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      try {
        // 검색어 저장
        const searchHistory = JSON.parse(localStorage.getItem("searchHistory") || "[]");
  
        if (!searchHistory.includes(name)) {
          searchHistory.push(name);
          localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        }
  
        // 서버로 검색 요청
        const data = await getUserData(name, server);
        
        sessionStorage.setItem("ocid", data.ocid);
        router.push(`/detail`);
      } catch (e: any) {
        // 에러 발생 시 alert로 사용자에게 알림
        alert(e.message || "유저를 찾을 수 없습니다.");
        console.log(e);
      }
    }
  };

  const onClick = async (item:string) => {
      try {
        // 검색어 저장
        const searchHistory = JSON.parse(localStorage.getItem("searchHistory") || "[]");
  
        if (!searchHistory.includes(name)) {
          searchHistory.push(name);
          localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        }
  
        // 서버로 검색 요청
        const data = await getUserData(item, server);
        
        sessionStorage.setItem("ocid", data.ocid);
        router.push(`/detail`);
      } catch (e: any) {
        // 에러 발생 시 alert로 사용자에게 알림
        alert(e.message || "유저를 찾을 수 없습니다.");
        console.log(e);
      }
  };
  

  useEffect(() => {
    const users = fetchDataFromServer(debouncedInput);
    setResult(users);
  }, [debouncedInput]);

  return (
    <>
      <div className="relative flex items-center justify-center pt-52 z-20">
        <Image src="/maplepet.png" alt="title" priority width={75} height={75} layout="fixed" />

        <select onChange={onSelectServer} value={server} id="custom-select" className="absolute sm:ml-[-110px] ml-[30px] top-[170px] w-[200px] px-2 py-2 text-[#9BA3AF] bg-maple-dark border-maple-green border-2 rounded-md shadow-sm focus:outline-none sm:text-sm">
          <option>서버를 선택하세요.</option>
          <option>스카니아</option>
          <option>크로아</option>
          <option>루나</option>
          <option>제니스</option>
          <option>유니온</option>
          <option>엘리시움</option>
          <option>아케인</option>
        </select>

        <div className="relative border-maple-green border-2 rounded-md">
          <input 
            type="text" 
            value={name}
            onChange={onChangeName}
            onKeyDown={onKeyPress}
            placeholder="캐릭터 명을 입력하세요." 
            className="sm:w-96 w-60 p-4 rounded-md bg-maple-dark text-white outline-none"
          />

          <div className={`absolute top-[52px] left-[-2px] bg-maple-dark text-white border-maple-green ${result ? "border-2" : "border-0"} border-t-0 rounded-b-lg`}>
            {result && result.map((item, index) => (
              <p onClick={() => onClick(item)} key={index} className="p-3 w-96 m-auto cursor-pointer">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default MapleSearch;
