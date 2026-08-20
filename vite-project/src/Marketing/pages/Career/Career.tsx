import Banner from "../../Components/Banner/Banner"
import Navbar from "../../Components/Navbar/Navbar"
import Career from "../../Components/Career/Career"
import Footer from "../../Components/Footer/Footer"

export function meta() {
  const title = 'Careers — Join the Samisher team.'
  const description = 'Join a remote-first team helping B2B companies book qualified meetings with a performance-based model. Explore open positions at Samisher.'

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: 'https://samisher.com/career/' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://samisher.com/career/' },
    { property: 'og:site_name', content: 'Samisher' },
    { property: 'og:image', content: 'https://samisher.com/S.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://samisher.com/S.svg' },
  ]
}

const CareerPage = () => {
    return (
        <>
            <Banner />
            <Navbar />
            <Career />
            <Footer />
        </>
    )
}

export default CareerPage