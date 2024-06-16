import Star from "./Star"

export default function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (v, i) => i < rating)

  return (
    <div>
      {stars.map((filled, index) => (
        <Star key={index} filled={filled} />
      ))}
    </div>
  )
}