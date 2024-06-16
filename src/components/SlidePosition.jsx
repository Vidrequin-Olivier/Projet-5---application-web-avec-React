export default function SlidePosition({ house, pictureIndex }) {
  const picturesLength = house.pictures.length

  return (
    <div className="slidePosition">
      <p>{pictureIndex + 1}/{picturesLength}</p>
    </div>
  )
}
