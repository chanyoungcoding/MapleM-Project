import React from 'react'

interface ButtonData {
  children: React.ReactNode
}

const MapleButton:React.FC<ButtonData> = ({children}) => {
  return (
    <button className='mx-1 p-2 text-white font-bold rounded-md bg-maple-dark border-none'>{children}</button>
  )
}

export default MapleButton