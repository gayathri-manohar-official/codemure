import './Products.scss';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

export default function Products() {

    const products = [
        {
            className: "amara",
            productName: "Amara"
        },
        {
            className: "melt-and-made",
            productName: "Melt & Made"
        },
        {
            className: "ntrl",
            productName: "NTRL"
        },
        {
            className: "zelorah",
            productName: "Zelorah"
        },

    ]

    return (
        <section id='products' className="products-section">
            <p className='section-heading'><CircleIcon className='bullet-point' /> FEATURED PRODUCTS</p>
            <div className="product-gallery">
                {
                    products.map(product => (
                        <div className={`product-image ${product.className}`} key={product.className}>
                            <Link
                                to={`/projects/${product.className}`}
                                className="product-link"
                            >
                                <div className="product-overlay">
                                    <h2>{product.productName}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                } 
            </div>

            <Link
                to='/projects'
                className='view-products-btn'
            >
                VIEW ALL PRODUCTS
            </Link> {/* rel='noopener noreferrer' is a security best practice to prevent the new page from accessing your origin page via window.opener */}

        </section>
    )
}