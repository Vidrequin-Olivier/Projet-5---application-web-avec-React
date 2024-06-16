import { useState } from "react"
import SlidePosition from "../components/SlidePosition"

function handlePictureChanges({ direction, setPictureIndex, pictures }) {
  if (direction === "next") {
    setPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  } else if (direction === "previous") {
    setPictureIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length)
  }

  return {setPictureIndex}
}

export default function AccommodationPhoto({ house, houseIndex, housingLength }) {
  const [pictureIndex, setPictureIndex] = useState(0)
  const pictures = house.pictures
  const picture = pictures[pictureIndex]
  let direction = ""

  return (
    <div className="accommodationPhoto" style={{ backgroundImage: `url(${picture})` }}>
      {housingLength > 1 && (
        <>
          <div className="slideArrow">
            <svg
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={ () => {
                direction = "previous"
                handlePictureChanges({ direction, setPictureIndex, pictures})
              }}
            >
              <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" fill="white"/>
            </svg>
          </div>
          <SlidePosition house={house} pictureIndex={pictureIndex} />
          <div className="slideArrow">
            <svg
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={ () => {
                direction = "next"
                handlePictureChanges({ direction, setPictureIndex, pictures})
              }}
            >
              <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
          </div>
        </>
      )}
    </div>
  )
}