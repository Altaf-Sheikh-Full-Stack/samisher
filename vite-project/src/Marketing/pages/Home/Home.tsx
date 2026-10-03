import './Home.css'
// import Company from "../../Components/Company/Company"
import HomeLayout from "../../Layout/Home/Home"


export function meta() {
  const title = 'Samisher - More Revenue. Lower Costs.'
  const description = 'No Sales Team Needed. Agent Sales 25/7. Lower Costs. More Revenue. No Deal. No Bill.'

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: 'https://samisher.com/' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://samisher.com/' },
    { property: 'og:site_name', content: 'Samisher' },
    { property: 'og:image', content: 'https://samisher.com/A.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://samisher.com/A.svg' },
  ]
}

const Home = () => {
    return (
        <>
           <HomeLayout />
        </>

    )
}

export default Home
