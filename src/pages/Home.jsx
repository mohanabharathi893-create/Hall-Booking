import HeroSlider from "../components/HeroSlider"
import Services from "../components/Services"
import Serviceslider from "../components/Serviceslider"
import VenueSection from "../components/VenueSection"
import "./Home.css";

function Home(){

return(

<div className="Home-bg">

<HeroSlider/>

<Services/>

<Serviceslider/>

<VenueSection/>

</div>

)

}

export default Home;