export default function SlidePosition( {houseIndex, housingLength} ) {
  return (
    <div className="slidePosition">
      <p>{houseIndex + 1}/{housingLength}</p>
    </div>
  )
}