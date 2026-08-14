import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Marketing/pages/Home/Home";
import Pricing from "./Marketing/pages/Pricing/Pricing";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </BrowserRouter >
    );
}

export default Router;