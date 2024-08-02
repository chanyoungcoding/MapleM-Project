import React from 'react'

interface VCoreEquipment {
  slot_id: string;
  slot_level: number;
  v_core_name: string;
  v_core_level: number;
}

interface VMetrixData {
  character_class: string;
  character_v_core_equipment: VCoreEquipment[];
}

interface MapleVMatrixData {
  VMetrix: VMetrixData | null
}

const MapleVMatrix:React.FC<MapleVMatrixData> = ({VMetrix}) => {

  const truncateText = (text: string, maxLength: number = 20): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };


  return (
    <div className='relative z-50 bg-white p-5 border-maple-purple border-4 rounded-lg w-[500px]'>

      <h1 className='pb-5 font-bold text-xl text-maple-purple'>5차 스킬</h1>

      <div>
        {VMetrix?.character_v_core_equipment.map((item,index) => (
          <div key={index} className='flex items-center justify-between mb-2 w-[350px]'>
            <div className='group relative'>
              <h2 className='font-bold text-base'>{truncateText(item.v_core_name)}</h2>
              <div className='absolute p-1 text-[10px] w-[300px] bg-white border border-gray-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <p>{item.v_core_name}</p>
              </div>
            </div>
            <h3 className='ml-3 py-2 px-4 rounded-md bg-maple-darkblue text-maple-lightblue'>{item.slot_level}</h3>
          </div>
        ))}
      </div>

    </div>
  )
}

export default MapleVMatrix
