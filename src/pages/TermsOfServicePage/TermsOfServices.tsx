import './TermsOfServices.scss'
import LegalHero from '../../components/Legal/LegalHero';
import TermsBg from '../../assets/images/terms-of-service-bg.webp'
import LegalContent from '../../components/Legal/LegalContent';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import LegalContactCard from '../../components/Legal/LegalContactCard';
import termsMobileImg from '../../assets/images/terms-of-service-bg-mobile.webp';
const termsLastUpdated = 'Aug 07, 2026';
const termsSections = [
    {
        id: "acceptance-of-terms",
        title: "1. Acceptance of Terms",
        icon: <FactCheckOutlinedIcon className='icon' />,
        content: (
            <>
                <p>By accessing or using the Codemure website or our services, you agree to be bound by these Terms of Service and our Privacy Policy.</p>
                <p>If you do not agree with these terms, please do not use our website or services.</p>
            </>
        )
    },
    {
        id: "services",
        title: "2. Services",
        icon: <DesignServicesOutlinedIcon className='icon' />,
        content: (
            <>
                <p>Codemure provides product development and digital solutions including web applications, mobile apps, SaaS products, and related services.</p>
                <p>The specific features, deliverables, pricing, and scope of each service will be defined in individual agreements, proposals, or project documentation.</p>
            </>
        )
    },
    {
        id: "user-responsibilities",
        title: "3. User Responsibilities",
        icon: <PersonOutlineOutlinedIcon className='icon' />,
        content: (
            <>
                <p>You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the service.</p>
                <ul>
                    <li>Provide accurate and complete information.</li>
                    <li>Do not attempt to gain unauthorized access.</li>
                    <li>Do not misuse or interfere with our services.</li>
                    <li>Do not use our services for illegal or harmful activities.</li>
                    <li>Follow any additional terms that apply to specific services.</li>
                </ul>
            </>
        )
    },
    {
        id: "intellectual-property",
        title: "4. Intellectual Property",
        icon: <CopyrightOutlinedIcon className='icon' />,
        content: (
            <>
                <p>All content, designs, code, logos, graphics, and materials available on this website are the property of Codemure or their respective owners and are protected by copyright and other intellectual property laws.</p>
                <p>Unless otherwise agreed in writing, you may not reproduce, modify, distribute, or use our intellectual property without permission.</p>
            </>
        )
    },
    {
        id: "payments-and-refunds",
        title: "5. Payments & Refunds",
        icon: <PaymentsOutlinedIcon className='icon' />,
        content: (
            <>
                <p>Where payment is required for our services, applicable fees, payment schedules, and terms will be communicated before work begins.</p>
                <p>Payments must be made according to the agreed terms. Refunds, cancellations, and credits will be handled according to the applicable agreement or project terms.</p>
            </>
        )
    },
    {
        id: "limitation-of-liability",
        title: "6. Limitation of Liability",
        icon: <GppMaybeOutlinedIcon className='icon' />,
        content: (
            <>
                <p>To the extent permitted by applicable law, Codemure will not be liable for indirect, incidental, special, or consequential losses arising from your use of our website or services.</p>
                <p>We do not guarantee that our website or services will always be available, uninterrupted, or completely free from errors.</p>
                <p>Our liability will be limited to the extent permitted by applicable law and any applicable agreement between you and Codemure.</p>
            </>
        )
    },
    {
        id: "termination",
        title: "7. Termination",
        icon: <CancelOutlinedIcon className='icon' />,
        content: (
            <>
                <p>We may suspend or terminate access to our services if you violate these Terms of Service, misuse our services, or engage in activities that may harm Codemure, our users, or our systems.</p>
                <p>You may stop using our services at any time, subject to any applicable contractual or payment obligations.</p>
                <p>Upon termination, provisions that are intended to continue by their nature will remain in effect.</p>
            </>
        )
    },
    {
        id: "governing-law",
        title: "8. Governing Law",
        icon: <BalanceOutlinedIcon className='icon' />,
        content: (
            <>
                <p>These Terms of Service will be governed by and interpreted in accordance with the laws of <span>[Applicable Jurisdiction]</span>, without regard to its conflict of law principles.</p>
                <p>Any disputes arising from these terms or our services will be subject to the applicable courts and legal processes of that jurisdiction.</p>
            </>
        )
    },
    {
        id: "changes-to-terms",
        title: "9. Changes to Terms",
        icon: <UpdateOutlinedIcon className='icon' />,
        content: (
            <>
                <p>We may update these Terms of Service from time to time to reflect changes to our services, business practices, or legal requirements.</p>
                <p>When we make changes, we will update the Last Updated date at the top of this page. Your continued use of our website or services after changes are posted means that you accept the updated terms.</p>
            </>
        )
    },
]

export default function TermsOfService() {
    return (
        <div className="terms-of-services-page">
            <LegalHero
                titleNormal='Terms of '
                titleHighlighted='Service'
                subText={
                    <>
                        These terms govern your use of our website and services. By using Codemure, you agree to these terms.
                    </>
                }
                bgImage={TermsBg}
                mobileImage={termsMobileImg}
            />

            <LegalContent
                lastUpdated={termsLastUpdated}
                sections={termsSections}
            />

            <LegalContactCard
                title='Have questions about our terms?'
                description="If you have any questions about these terms, feel free to contact us anytime."
            />
        </div>
    )
}