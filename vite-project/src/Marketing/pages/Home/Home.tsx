import Hero from "../../Components/Hero/Hero"
import Navbar from "../../Components/Navbar/Navbar"
import './Home.css'
import Company from "../../Components/Company/Company"
import Banner from "../../Components/Banner/Banner"
import Stack from "../../Components/Stack/Stack"
import Funnel from "../../Components/Statistics/Statistics"
import CTA from "../../Components/CTA/CTA"
import FAQ from "../../Components/FAQ/FAQ"
import Footer from "../../Components/Footer/Footer"

export function meta() {
  const title = 'Samisher —  B2B Sales Outsourcing. Pay Only for Qualified Meetings.'
  const description = 'Samisher helps you pay only for meetings that convert. Schedule, qualify, and close with confidence — pay per successful meeting.'

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: 'https://samisher.com/' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://samisher.com/' },
    { property: 'og:site_name', content: 'Samisher' },
    { property: 'og:image', content: 'https://samisher.com/S.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://samisher.com/S.svg' },
  ]
}

const Home = () => {
    return (
        <>
            <Banner />
            <Navbar />
            <Hero />
            <Company />
            <Stack />
            <Funnel/>
            <FAQ/>
            <CTA/>
            
            <Footer/>
        </>

    )
}

export default Home
