import MapleAbilityDetail from "./maple-ability-detail";

interface CharacterStat {
  stat_name: string;
  stat_value: string;
}

interface MapleAbilityProps {
  stats: CharacterStat[] | null;
}

const MapleAbility:React.FC<MapleAbilityProps> = ({stats}) => {

  const statProps = (num: number, value: string) => {
    const statName = stats && stats[num].stat_name
    const statValue = stats && stats[num].stat_value

    const userStat = value === "value" ? statValue : statName 
    return userStat
  }

  return (
    <div className="relative w-[300px] h-[320px] bg-white p-5 border-4 border-maple-sky rounded-lg z-50">
      <h1 className=" pb-5 font-bold text-xl text-maple-sky">스탯</h1>

      <MapleAbilityDetail 
        a={statProps(1, "name")}
        b={statProps(1, "value")}
        c={statProps(2, "name")}
        d={statProps(2, "value")}
      />
      
      <div className="w-[100%] mt-5 mb-5 h-0.5 bg-black"></div>
      
      <MapleAbilityDetail 
        a={statProps(3, "name")}
        b={statProps(3, "value")}
        c={statProps(5, "name")}
        d={statProps(5, "value")}
      />

      <MapleAbilityDetail 
        a={statProps(4, "name")}
        b={statProps(4, "value")}
        c={statProps(6, "name")}
        d={statProps(6, "value")}
      />

    </div>
  )
}

export default MapleAbility