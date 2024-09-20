import React from 'react'

interface MapleAbilityDetailProps {
  leftName: string | null;
  leftValue: string | null;
  rightName: string | null;
  rightValue: string | null;
}

const MapleAbilityDetail:React.FC<MapleAbilityDetailProps> = ({leftName,leftValue,rightName,rightValue}) => {

  return (
    <div className="flex items-center justify-between">
      <div>
        <p>{leftName}</p>
        <p>{leftValue}</p>
      </div>

      <div className="w-[100px]">
        <p>{rightName}</p>
        <p>{rightValue}</p>
      </div>
    </div>
  )
}

export default MapleAbilityDetail