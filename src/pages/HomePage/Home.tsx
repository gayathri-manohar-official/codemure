import './Home.scss';
import Hero from '../../components/HomePageComponents/Hero/HeroHome'
import About from '../../components/HomePageComponents/About/About';
// import Products from '../../components/HomePageComponents/Products/Products';
import Services from '../../components/HomePageComponents/Services/Services';
import Process from '../../components/HomePageComponents/Process/Process';
import Tools from '../../components/HomePageComponents/Tools/Tools';

export default function Home(){
    return(
        <div className="home-page">
            <Hero/>
            <About/>
            <Tools/>
            {/* <Products/> */}
            <Services/>
            <Process/>
        </div>
    )
}