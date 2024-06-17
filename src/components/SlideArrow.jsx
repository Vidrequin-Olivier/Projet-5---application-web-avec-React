function handlePictureChanges({ direction, setPictureIndex, pictures }) {
  if (direction === "next") {
    setPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  } else if (direction === "previous") {
    setPictureIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length)
  }

  return {setPictureIndex}
}

export default function SlideArrow({ arrow, setPictureIndex, pictures }) {
  let direction = ""

  return (
    <div className="slideArrow">
      <svg
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={ () => {
          direction = arrow.direction
          handlePictureChanges({ direction, setPictureIndex, pictures})
        }}
      >
        <path d={arrow.pathD} fill="white"/>
      </svg>
    </div>
  )
}