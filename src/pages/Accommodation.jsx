import { useParams } from "react-router-dom"
import Error404 from "./Error404"
import Header from "../components/Header"
import { HouseProvider } from "../contexts/HouseContext"
import Housing from "../components/Housing"
import AccommodationPhoto from "../components/AccommodationPhoto"
import HouseInfos from "../components/HouseInfos"
import Host from "../components/Host"
import HouseDetails from "../components/HouseDetails"
import Footer from "../components/Footer"

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
        <HouseProvider house={house}>
          <AccommodationPhoto
            house={house} previousHouseId={previousHouseId} houseIndex={houseIndex}
            housingLength={housingLength} nextHouseId={nextHouseId}
          />
          <section className="accommodationDetailsContainer">
            <div className="accommodationDetails">
              <HouseInfos house={house} />
              <Host house={house} />
            </div>
            <HouseDetails />
          </section>
        </HouseProvider>
      </main>
      <Footer />
  </>
}