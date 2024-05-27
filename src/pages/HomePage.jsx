import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  return <>
      <Header />
      <section>
        <h1>Page d'accueil</h1>
        <Link to="/AccommodationSheet">lien vers "Fiche logement"</Link>
      </section>
      <Footer />
  </>
}