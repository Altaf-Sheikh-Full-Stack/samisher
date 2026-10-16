import Banner from '../../Components/Banner/Banner.tsx';
import Company from '../../Components/Company/Company.tsx';
import FAQ from '../../Components/FAQ/FAQ.tsx';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Meeting from '../../Components/Meeting/Meeting';
import Navbar from '../../Components/Navbar/Navbar';
import Process from '../../Components/Process/Process.tsx';
import Testimonials from '../../Components/Testimonials/Testimonials.tsx';
import './Home.css'



const HomeLayout = () => {
    return (
        <div className="HomeLayout">
            <div className='HomeLayout-Navbar'>
                {/* <Navbar /> */}
                <Banner/>
            </div>
            <div className='HomeLayout-Hero'>
                <Hero />
            </div>

            <div className='HomeLayout-Process'>
                {/* <Process /> */}

            </div>
            <div className='HomeLayout-Meeting'>

                {/* <Meeting/> */}

            </div>

            <div className='HomeLayout-Company'>

                {/* <Company /> */}
                
            </div>
                <div className='HomeLayout-Testimonials'>
                {/* <Testimonials/> */}
            </div>
            <div className='HomeLayout-FAQ'>

                {/* <FAQ /> */}
            </div>
            <div className='HomeLayout-Footer'>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default HomeLayout;