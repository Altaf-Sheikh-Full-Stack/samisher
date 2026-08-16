import Hero from "../../Components/Hero/Hero"
import Navbar from "../../Components/Navbar/Navbar"
import './Home.css'
import Company from "../../Components/Company/Company"
import Lead from "../../Components/Process/Lead/Lead"
import Banner from "../../Components/Banner/Banner"
import Intent from "../../Components/Process/Intent/Intent"
import Meeting from "../../Components/Process/Meeting/Meeting"
import Closer from "../../Components/Process/Closer/Closer"
import Funnel from "../../Components/Statistics/Statistics"
import CTA from "../../Components/CTA/CTA"
import Footer from "../../Components/Footer/Footer"
import Space from "../../Components/Space/Space"

const Home = () => {
    return (
        <>
            <Banner />
            <Navbar />
            <Hero />
            <Company />
            <Lead />
            <Intent/>
            <Meeting/>
            <Closer/>
            <Funnel/>
            <CTA/>
            <Space/>
            <Footer/>
        </>

    )
}

export default Home