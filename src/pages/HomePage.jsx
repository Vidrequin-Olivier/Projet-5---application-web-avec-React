import Header from "../components/Header"
import Banner from "../components/Banner"
import bannerImg from "../images/bannerImg.png"
import BannerP from "../components/BannerP"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"

export default function HomePage() {
  return <>
      <Header />
      <main className="homePage">
        <Banner backgroundImage= {bannerImg} >
          <BannerP />
        </Banner>
        <Gallery />
      </main>
      <Footer />
  </>
}