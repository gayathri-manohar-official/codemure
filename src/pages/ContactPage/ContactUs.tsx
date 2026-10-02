import Hero from '../../components/ContactPageComponents/Hero/HeroContact'
import './ContactUs.scss'
import Form from '../../components/ContactPageComponents/Form/FormSection'
import Advertisement from '../../components/ContactPageComponents/Advertisement/Advertisement'


export default function ContactUs(){
    return(
        <div className="contact-page">
            <Hero/>
            <Form/>
            <Advertisement/>
        </div>     
    )
}