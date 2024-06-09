import HouseTags from "./HouseTags"

export default function HouseInfos({ house }) {
  return <div className="houseInfos">
    <h1>
      <span className="smallScreen">{house.description}</span>
      <span className="largeScreen">{house.title}</span>
    </h1>
    <p className="houseLocation">{house.location}</p>
    <div className="houseTags">
      <HouseTags house={house} />
    </div>
  </div>
}