import HouseTags from "./HouseTags"

export default function HouseInfos({ house }) {
  return <div className="houseInfos">
    <h1>{house.title}</h1>
    <p className="houseLocation">{house.location}</p>
    <div className="houseTags">
      <HouseTags house={house} />
    </div>
  </div>
}