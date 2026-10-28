import Navbar from "../../Components/Navbar/Navbar"
import Price from "../../Components/Price/Price"
// import Pricing from "../../Components/Pricing/Pricing"
import './Pricing.css'


const PricingLayout = () => {
    return (
        <div className="PricingLayout">
            <div>
                <Navbar />
            </div>
            <div>
                <Price/>
            </div>
        </div>
    )
}

export default PricingLayout