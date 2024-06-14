import Rating from "./Rating"

export default function Host({ house }) {
  return <div className="hostInfos">
    <Rating rating={house.rating} />
    <div className="host">
      <p>{house.host.name}</p>
      <img src={house.host.picture} alt={`Avatar de ${house.host.name}`} />
    </div>
  </div>
}
