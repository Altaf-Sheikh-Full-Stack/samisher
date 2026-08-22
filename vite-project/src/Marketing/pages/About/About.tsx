import Banner from "../../Components/Banner/Banner"
import Navbar from "../../Components/Navbar/Navbar"
import About from "../../Components/About/About"
import Footer from "../../Components/Footer/Footer"

export function meta() {
  const title = 'About us — The team behind Samisher.'
  const description = 'Samisher is a remote-first sales partner helping B2B teams book qualified meetings with a performance-based model. Learn about our story, values, and how we work.'

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: 'https://samisher.com/about/' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://samisher.com/about/' },
    { property: 'og:site_name', content: 'Samisher' },
    { property: 'og:image', content: 'https://samisher.com/S.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://samisher.com/S.svg' },
  ]
}

const AboutPage = () => {
    return (
        <>
            <Banner />
            <Navbar />
            <About />
            <Footer />
        </>
    )
}

export default AboutPage
