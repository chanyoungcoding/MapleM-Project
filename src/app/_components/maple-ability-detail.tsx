import React from 'react'

interface MapleAbilityDetailProps {
  a: string | null;
  b: string | null;
  c: string | null;
  d: string | null;
}

const MapleAbilityDetail:React.FC<MapleAbilityDetailProps> = ({a,b,c,d}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p>{a}</p>
        <p>{b}</p>
      </div>

      <div className="w-[100px]">
        <p>{c}</p>
        <p>{d}</p>
      </div>
    </div>
  )
}

export default MapleAbilityDetail