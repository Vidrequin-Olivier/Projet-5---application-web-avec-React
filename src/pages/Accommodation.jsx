import { useParams } from "react-router-dom"
import Error404 from "./Error404"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Housing from "../components/Housing"

export default function Accommodation() {
  const { id } = useParams();
  const house = Housing().find(el => el.id === id)

  if (!house) {
    return <Error404 />
  }

  return <>
    <Header />
    <h1>Fiche logement</h1>
    <p>{house.title}</p>
    <Footer />
  </>
}