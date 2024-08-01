import MapleNavbar from "../_components/maple-navbar"

interface Layout {
  children: React.ReactNode
}

const layout:React.FC<Layout> = ({children}) => {
  return (
    <>
    <MapleNavbar/>
    {children}
    </>
  )
}

export default layout