import './PrivacyPolicy.scss';
import LegalHero from '../../components/Legal/LegalHero';
import PrivacyBg from '../../assets/images/privacy-policy-bg.webp';
import LegalContent from '../../components/Legal/LegalContent';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LegalContactCard from '../../components/Legal/LegalContactCard';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import privacyMobileImg from '../../assets/images/privacy-policy-bg-mobile.webp'

const privacyLastUpdated = 'Aug 07, 2026';
const privacySections = [
                    {
                        id: "introduction",
                        title: "1. Introduction",
                        icon: <BadgeOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>Codemure ("we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our products and services.</p>
                            </>
                        )
                    },
                    {
                        id: "information-we-collect",
                        title: "2. Information We Collect",
                        icon:<DataUsageOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>We collect information that you provide directly to us and information that is collected automatically:</p>
                                <ul>
                                    <li> <span>Personal Information</span>: name, email address, company name, and other details you provide.</li>
                                    <li> <span>Usage Information</span>: pages visited, time spent, device information, browser type, IP address.</li>
                                </ul>
                            </>
                        )
                    },
                    {
                        id: "how-we-use-your-information",
                        title: "3. How We Use Your Information",
                        icon: <SettingsOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>We use the information we collect to:</p>
                                <ul>
                                    <li>Provide, operate, and maintain our services.</li>
                                    <li>Improve, personalize, and expand our services.</li>
                                    <li>Communicate with you and respond to your inquiries.</li>
                                    <li>Send updates, newsletters, and marketing communications (with your consent).</li>
                                    <li>Ensure security and prevent fraud.</li>
                                </ul>
                            </>
                        )
                    },
                    {
                        id: "data-sharing-and-disclosure",
                        title: "4. Data Sharing & Disclosure",
                        icon: <ShareOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>We do not sell your personal information. We may share your information with:</p>
                                <ul>
                                    <li>Service providers who help us operate our website and services.</li>
                                    <li>Legal authorities when required by law.</li>
                                    <li>Other parties with your consent.</li>
                                </ul>
                            </>
                        )
                    },
                    {
                        id: "data-security",
                        title: "5. Data Security",
                        icon: <SecurityOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>We take reasonable measures to protect your information from unauthorized access, loss, misuse, alteration, or disclosure.
                                We use appropriate technical and organizational safeguards to protect the information we collect. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
                            </>
                        )
                    },
                    {
                        id: "your-rights",
                        title: "6. Your Rights",
                        icon: <GavelOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>Depending on your location and applicable laws, you may have rights regarding your personal information, including the right to:</p>
                                <ul>
                                    <li>Access the personal information we hold about you.</li>
                                    <li>Request correction of inaccurate or incomplete information.</li>
                                    <li>Request deletion of your personal information.</li>
                                    <li>Object to or restrict certain uses of your information.</li>
                                    <li>Withdraw consent where processing is based on consent.</li>
                                    <li>Request a copy of your information in a portable format.</li>
                                </ul>
                                <p>To exercise these rights, please contact us using the information provided in the <span>Contact Us</span> section.</p>
                            </>
                        )
                    },
                    {
                        id: "cookies-and-tracking",
                        title: "7. Cookies & Tracking",
                        icon: <CookieOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>We may use cookies and similar technologies to operate our website, understand how visitors use our services, and improve your experience.</p>
                                <p>These technologies may help us:</p>
                                <ul>
                                    <li>Remember your preferences and settings.</li>
                                    <li>Understand website usage and performance.</li>
                                    <li>Analyze traffic and interactions.</li>
                                    <li>Improve our products and services.</li>
                                </ul>
                                <p>You can control or disable cookies through your browser settings. Some features of our website may not function properly if certain cookies are disabled.</p>
                            </>
                        )
                    },
                    {
                        id: "third-party-services",
                        title: "8. Third-Party Services",
                        icon: <LinkOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>We may use third-party services to help us operate, analyze, secure, and improve our website and products.</p>
                                <p>These services may include providers for:</p>
                                <ul>
                                    <li>Hosting and infrastructure.</li>
                                    <li>Analytics and performance monitoring.</li>
                                    <li>Payments and subscriptions.</li>
                                    <li>Authentication and communication.</li>
                                    <li>Customer support.</li>
                                </ul>
                                <p>These third parties may have access to information only as necessary to perform services on our behalf and are expected to handle it in accordance with applicable privacy requirements.</p>
                            </>
                        )
                    },
                    {
                        id: "childrens-privacy",
                        title: "9. Children's Privacy",
                        icon: <ChildCareOutlinedIcon className='icon'/>,
                        content: (
                            <>
                                <p>Our website and services are not intended for children under the age of 13, or the minimum age required by applicable law.
                                We do not knowingly collect personal information from children without appropriate consent. If you believe that a child has provided us with personal information, please contact us so that we can take appropriate action.</p>
                            </>
                        )
                    },
                    {
                        id: "changes-to-this-policy",
                        title: "10. Changes to This Policy",
                        icon: <UpdateOutlinedIcon className='icon'/>,
                        content: (
                            <>
                            <p>We may update this Privacy Policy from time to time to reflect changes to our services, practices, or legal requirements.
                            When we make changes, we will update the Last Updated date at the top of this policy. We encourage you to review this page periodically to stay informed about how we protect your information.</p>
                            </>
                        )
                    }
                ]

export default function PrivacyPolicy(){
    return(

        <div className="privacy-policy-page">
            <LegalHero 
                titleNormal='Privacy '
                titleHighlighted='Policy'
                subText="Your privacy is important to us. This policy explains how we collect, use and protect your information."
                bgImage={PrivacyBg}
                mobileImage={privacyMobileImg}
            />

            <LegalContent
                lastUpdated={privacyLastUpdated}
                sections= {privacySections}
            />

            <LegalContactCard
                title='Have questions about privacy?'
                description="If you have any questions about this policy or your data, please don't hesitate to contact us."
            />
        </div>  
    )
}