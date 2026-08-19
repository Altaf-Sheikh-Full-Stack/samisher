
import Section from "../../../System/Layouts/Section/Section"
import Banner from "../../Components/Banner/Banner"
import Navbar from "../../Components/Navbar/Navbar"

import { ServiceBuilder } from "../../Components/SalesPackageBuilder_Final"
export function meta() {
  const title = 'Pricing — Calculate your estimated benefits.'
  const description = 'Build a Samisher sales package around the services you need and pay per qualified meeting, starting at $7 per appointment.'

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: 'https://samisher.com/pricing' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://samisher.com/pricing' },
    { property: 'og:site_name', content: 'Samisher' },
    { property: 'og:image', content: 'https://samisher.com/S.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://samisher.com/S.svg' },
  ]
}






const Pricing = () => {
    return(
        <>
            <Banner/>
            <Navbar/>
            <ServiceBuilder/>
        </>
    )
}


export default Pricing
