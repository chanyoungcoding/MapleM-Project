import React from 'react'

const MapleVMatrix = () => {

  const testData = [
    {
      name: "충동과 잊혀지지 않는 고통/어쩌고 저쩌고 고통",
      num: "15"
    },
    {
      name: "충동과 잊혀지지 않는 고통/어쩌고 저쩌고 고통",
      num: "15"
    },
    {
      name: "충동과 잊혀지지 않는 고통/어쩌고 저쩌고 고통",
      num: "15"
    },
  ]

  return (
    <div className='relative z-50 bg-white p-5 border-maple-purple border-4 rounded-lg w-[500px]'>

      <h1 className='pb-5 font-bold text-xl text-maple-purple'>5차 스킬</h1>

      <div>
        {testData.map((item, index) => (
          <div key={index} className='group relative flex items-center mb-2'>
            <h2 className='font-bold text-base'>{item.name.substring(0,20) + "..."}</h2>
            <h3 className='ml-3 py-2 px-4 rounded-md bg-maple-darkblue text-maple-lightblue'>{item.num}</h3>
            <div className='absolute top-[-70px] right-[-15px] p-4 bg-white border border-gray-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default MapleVMatrix
