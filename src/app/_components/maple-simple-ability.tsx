import React from "react";

interface MapleSimpleAbilityData {
  work: string;
  ability: string;
}

const MapleSimpleAbility:React.FC<MapleSimpleAbilityData> = ({work, ability}) => {
  return (
    <div className="m-5">
      <div className="flex items-center border-[1px] border-black">
        <p className="grow px-5 py-2 bg-maple-darkblue text-maple-lightblue">직업</p>
        <p className="px-5 py-2 w-[150px] bg-white text-black">{work}</p>
      </div>
      <div className="flex items-center border-[1px] border-t-0 border-black">
        <p className="grow px-5 py-2 bg-maple-darkblue text-maple-lightblue">전투력</p>
        <p className="px-5 py-2 w-[150px] bg-white text-black">{ability}</p>
      </div>
    </div>
  )
}

export default MapleSimpleAbility