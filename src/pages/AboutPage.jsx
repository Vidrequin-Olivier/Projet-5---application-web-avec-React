import Header from "../components/Header"
import Banner from "../components/Banner"
import AboutPageBanner from "../images/AboutPageBanner.png"
import DropdownBar from "../components/DropdownBar"
import Footer from "../components/Footer"

export default function AboutPage() {
const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et les informations sont régulièrement vérifiées par nos équipes."
const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const service = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  return <>
    <Header />
    <main className="aboutPage">
      <Banner backgroundImage={AboutPageBanner}/>
      <div className="dropdownBarContainer">
        <DropdownBar button="Fiabilité" contents={fiabilite} />
        <DropdownBar button="Respect" contents={respect} />
        <DropdownBar button="Service" contents={service} />
        <DropdownBar button="Sécurité" contents={securite} />
      </div>
    </main>
    <Footer />
  </>
}