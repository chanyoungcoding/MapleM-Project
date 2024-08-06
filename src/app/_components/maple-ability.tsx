
interface CharacterStat {
  stat_name: string;
  stat_value: string;
}

interface MapleAbilityProps {
  stats: CharacterStat[] | null;
}

const MapleAbility:React.FC<MapleAbilityProps> = ({stats}) => {

  const statName = (num: number) => {
    const userStat = stats && stats[num].stat_name
    return userStat
  }

  return (
    <div className="relative w-[300px] h-[320px] bg-white p-5 border-4 border-maple-sky rounded-lg z-50">
      <h1 className=" pb-5 font-bold text-xl text-maple-sky">스탯</h1>
      
      <div className="flex items-center justify-between">
        <div>
          <p>{statName(1)}</p>
          <p>{stats && stats[1].stat_value}</p>
          
        </div>

        <div className="w-[100px]">
          <p>{stats && stats[2].stat_name}</p>
          <p>{stats && stats[2].stat_value}</p>
        </div>
      </div>
      
      <div className="w-[100%] mt-5 mb-5 h-0.5 bg-black"></div>

      <div className="flex items-center justify-between">
        <div>
          <p>{stats && stats[3].stat_name}</p>
          <p>{stats && stats[3].stat_value}</p>
        </div>

        <div className="w-[100px]">
          <p>{stats && stats[5].stat_name}</p>
          <p>{stats && stats[5].stat_value}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <div>
          <p>{stats && stats[4].stat_name}</p>
          <p>{stats && stats[4].stat_value}</p>
        </div>
        <div className="w-[100px]">
          <p>{stats && stats[6].stat_name}</p>
          <p>{stats && stats[6].stat_value}</p>
        </div>
      </div>

    </div>
  )
}

export default MapleAbility