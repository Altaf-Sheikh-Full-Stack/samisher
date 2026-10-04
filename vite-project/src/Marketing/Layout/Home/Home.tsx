import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
import Process from '../../Components/Process/Process';
import Stack from '../../Components/Stack/Stack';
import './Home.css'



const HomeLayout = () => {
    return (
        <div className="HomeLayout">
            <div className='HomeLayout-Navbar'>
                {/* <Navbar /> */}
            </div>
            <div className='HomeLayout-Hero'>
                {/* <Hero /> */}
            </div>

            <div className='HomeLayout-Stack'>
                <Process />
            </div>
            <div className='HomeLayout-Footer'>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default HomeLayout;