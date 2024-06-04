import Housing from "./Housing"
import Card from "./Card"

export default function Gallery() {
  const houses = Housing()
  return <div className="gallery">
    {houses.map(house => (
      <Card key={house.id} house={house} />
    ))}
  </div>
}
