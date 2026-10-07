import Navbar from "../../Components/Navbar/Navbar"
import Pricing from "../../Components/Pricing/Pricing"
import './Pricing.css'


const PricingLayout = () => {
    return (
        <div className="PricingLayout">
            <div>
                <Navbar />
            </div>
            <div>
                <Pricing/>
            </div>
        </div>
    )
}

export default PricingLayout