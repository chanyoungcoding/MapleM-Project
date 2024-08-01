
const MapleAbility = () => {

  return (
    <div className="relative w-[300px] bg-white p-5 border-4 border-maple-sky rounded-lg z-50">
      <h1 className=" pb-5 font-bold text-xl text-maple-sky">스탯</h1>
      
      <div className="flex items-center justify-between">
        <div>
          <p>물리 공격력</p>
          <p>232323</p>
        </div>
        <div>
          <p>마법 공격력</p>
          <p>232323</p>
        </div>
      </div>
      
      <div className="w-[100%] mt-5 mb-5 h-0.5 bg-black"></div>

      <div className="flex items-center justify-between pr-[15px] pb-4">
        <div>
          <p>물리 방어력</p>
          <p>232323</p>
        </div>
        <div>
          <p>HP</p>
          <p>232323</p>
        </div>
      </div>

      <div className="flex items-center justify-between pr-[15px]">
        <div>
          <p>물리 방어력</p>
          <p>232323</p>
        </div>
        <div>
          <p>MP</p>
          <p>232323</p>
        </div>
      </div>

    </div>
  )
}

export default MapleAbility