import { useParams } from "react-router-dom"
import Error404 from "./Error404"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Housing from "../components/Housing"
import SlidePosition from "../components/SlidePosition"
import HouseTags from "../components/HouseTags";

export default function Accommodation() {
  const { id } = useParams()
  const houses = Housing()
  const housingLength = Housing().length
  const house = houses.find(el => el.id === id)
  const houseIndex = houses.findIndex(el => el.id === id)

  if ( (houseIndex < 0) || (houseIndex > houses.length) ) {
    return <Error404 />
  }

  const previousHouseId = houses[(houseIndex - 1 + houses.length) % houses.length].id;
  const nextHouseId = houses[(houseIndex + 1) % houses.length].id;  

  return <>
      <Header />
      <main className="accommodation">
        <div className="accommodationPhoto" style={{ backgroundImage: `url(${house.cover})` }}>
          <Link to={`/accommodation/${previousHouseId}`}>
            <div className="slideArrow">
              <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" fill="white"/>
              </svg>
            </div>
          </Link>
          <SlidePosition
            houseIndex = {houseIndex}
            housingLength = {housingLength}
          />
          <Link to={`/accommodation/${nextHouseId}`}>
            <div className="slideArrow">
              <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
              </svg>
            </div>
          </Link>
        </div>
        <h1>{house.title}</h1>
        <p className="houseLocation">{house.location}</p>
        <div className="houseTags">
          <HouseTags house={house} />
        </div>
      </main>
      <Footer />
  </>
}