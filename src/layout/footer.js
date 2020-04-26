import React from 'react';
import { Link } from "gatsby"
const Footer = () => {
    return(
        <footer>
            © {new Date().getFullYear()},{" "}  
            <Link
                className = "footer__link"
                to="/404">
                 don't click here
            </Link>
        </footer>
    )
}
 
export default Footer