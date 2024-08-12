import React from 'react'

interface ButtonData {
  click: () => void;
  children: React.ReactNode;
}

const MapleButton:React.FC<ButtonData> = ({click, children}) => {

  const onClick = () => click();
  
  return (
    <button onClick={onClick} className='mx-1 p-2 text-white font-bold rounded-md bg-maple-dark border-none'>{children}</button>
  )
}

export default MapleButton