import React, {Fragment} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Jumbotron from "../../Components/Jumbotron/Jumbotron"
import Footer from "../../Components/Footer/Footer";

function LandingPage() {
    return (
        <Fragment>
            <Navbar/>
            <Jumbotron/>
            <Footer/>
        </Fragment>
    )
}

export default LandingPage