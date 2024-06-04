import { Link } from "react-router-dom"

export default function Card({house}) {
  return <Link to={`/accommodation/${house.id}`}>
    <figure 
      className="card"
      style={{ backgroundImage: `url(${house.cover})` }}
      id={house.id}
    >
      <figcaption>{house.title}</figcaption>
    </figure>
  </Link>
}