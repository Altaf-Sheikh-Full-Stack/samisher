
import Banner from "../../Components/Banner/Banner"
import Navbar from "../../Components/Navbar/Navbar"

import { PricingWizard } from "../../Components/PricingEngine"
export function meta() {
  const title = 'Pricing — See what results cost and what they return.'
  const description = 'Estimate in 2 minutes: pay per qualified result, see per-result price, monthly spend, conversion, and when you break even.'

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: 'https://samisher.com/pricing/' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://samisher.com/pricing/' },
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
            <PricingWizard/>
        </>
    )
}


export default Pricing
