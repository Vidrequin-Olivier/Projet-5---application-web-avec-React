import Header from "../components/Header"
import Banner from "../components/Banner"
import bannerImg from "../images/bannerImg.png"
import Footer from "../components/Footer"

function Children() {
  return (
    <div className="bannerPContainer">
      <p>Chez vous,</p>
      <p>partout et ailleurs</p>
    </div>
  )
}

export default function HomePage() {
  return <>
      <Header />
      <main>
        <Banner
          backgroundImage= {bannerImg} 
          opacity= "0.6"
          boxShadow= "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          marginBottom= "27px, 5vw, 50px"
        >
          <Children />
        </Banner>
      </main>
      <Footer />
  </>
}