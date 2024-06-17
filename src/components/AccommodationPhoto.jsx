import { useState } from "react"
import SlidePosition from "../components/SlidePosition"
import SlideArrow from "./SlideArrow"

const leftArrow = {
  direction: "previous",
  pathD: "M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" 
}

const rightArrow = {
  direction: "next",
  pathD: "M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" 
}

export default function AccommodationPhoto({ house }) {
  const [pictureIndex, setPictureIndex] = useState(0)
  const pictures = house.pictures
  const picture = pictures[pictureIndex]

  return (
    <div className="accommodationPhoto" style={{ backgroundImage: `url(${picture})` }}>
      {pictures.length > 1 && (
        <>
          <SlideArrow arrow={leftArrow} setPictureIndex={setPictureIndex} pictures={pictures} />
          <SlidePosition house={house} pictureIndex={pictureIndex} />
          <SlideArrow arrow={rightArrow} setPictureIndex={setPictureIndex} pictures={pictures} />
        </>
      )}
    </div>
  )
}