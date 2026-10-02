import './FormSection.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';;
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Whatsapp from '@mui/icons-material/WhatsApp';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

export default function FormSection() {

    const socials = [
        {
            id: "instagram",
            title: "Instagram",
            value: "https://www.instagram.com/codemure.official",
            href: "https://www.instagram.com/codemure.official?igsi=MTd2d2g5eXN1OW9wNQ%3D%3D&utm_source=qr",
            description: "Follow our daily updates & behind the scenes",
            icon: InstagramIcon
        },
        {
            id: "whatsapp",
            title: "Whatsapp",
            value: "https://wa.me/8590542579",
            href: "https://wa.me/8590542579",
            description: "Let's build something great. Chat with us on Whatsapp!",
            icon: Whatsapp
        },
        {
            id: "email",
            title: "Email",
            value: "hello@codemure.com",
            href: "mailto:hello@codemure.com",
            description: "We'll reply within 24 hours",
            icon: EmailIcon
        },
        {
            id: "linkedin",
            title: "LinkedIn",
            value: "linkedin.com/company/codemure",
            href: "https://linkedin.com/company/codemure",
            description: "Let's connect and collaborate",
            icon: LinkedInIcon
        },
        {
            id: "github",
            title: "GitHub",
            value: "github.com/codemure-official",
            href: "https://github.com/codemure-official",
            description: "Check out our work",
            icon: GitHubIcon
        },
    ];

    const formRef = useRef<HTMLFormElement>(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault(); // stops browser from refreshing the page
        if (!formRef.current) return; //fail safe, if for some reason, the form doesn't exist yet, stop
        setIsSending(true);

        try {
            await emailjs.sendForm(
                SERVICE_ID, //specifies which gmail acc EmailJS should use
                TEMPLATE_ID, //specifies which email template EmailJS should use
                formRef.current, //copies content inside current form into the template automatically
                {
                    publicKey: PUBLIC_KEY, //autheticates our app with EmailJS 
                }
            );

            formRef.current.reset();

            alert("Message sent successfully! 🎉");

        } catch (error) {

            console.log("EmailJS Error: ", error);
            alert("Something went wrong. Please try again.");

        } finally {

            setIsSending(false);

        }

    }

    const [isSending, setIsSending] = useState(false);

    return (
        <section className="contact-form-section">
            <form ref={formRef} className="primary-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Send us a message</h2>
                <p className="form-subtitle">Fill out the form and we'll get back to you as soon as possible.</p>
                <label htmlFor='name'>Your Name</label>
                <input id='name' type="text" className="username" placeholder='Enter your name' name='name' autoComplete='name' required />
                <label htmlFor='email'>Email Address</label>
                <input id='email' type="email" className="email" placeholder='Enter your email' name='email' autoComplete='email' required />
                <label htmlFor='subject'>Subject</label>
                <input id='subject' type="text" className="subject" placeholder='Enter your subject' name='subject' required />
                <label htmlFor='message'>Message</label>
                <textarea id="message" className="message" rows={4} placeholder='Write your message here...' name='message' required></textarea>
                <button className="send-btn" type='submit'>
                    {isSending ? "Sending..." : "Send Message"}
                    <ArrowForwardIcon className='arrow-icon' />
                </button>
            </form>

            <div className="other-ways">
                <h2 className="form-title">Other ways to reach us</h2>
                <p className="form-subtitle">Choose the way that works best for you.</p>

                {
                    socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a href={social.href} className="social-card" key={social.id} target='_blank' rel='noopener noreferrer'>
                                <div className="icon-container">
                                    <Icon />
                                </div>
                                <div className="card-content">
                                    <p className="title">{social.title}</p>
                                    {/* <p className="value">{social.value}</p> */}
                                    <p className="description">{social.description}</p>
                                </div>
                            </a>
                        )
                    })
                }
            </div>

        </section>
    )
}