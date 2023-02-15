// DEPENDENCIES //
import { Link } from 'react-scroll';

// IMAGES //
import signature from "../../assets/signature.jpg"

// STYLES // 
import "./header.css"

export default function Header() {
    return (
        <div id="header">
            <img className="sig" src={signature} alt="David Milton Signature Logo" />

            <nav>
                <Link className="h_link" to="about" smooth={true} duration={500} offset={-10} >About Me</Link>
                <Link className="h_link" to="resume" smooth={true} duration={500} offset={-10}>Resume</Link>
                <Link className="h_link" to="web_dev" smooth={true} duration={500} offset={-10}>Web Development</Link>
                <Link className="h_link" to="about" smooth={true} duration={500} offset={-10}>Graphic Art</Link>
                <Link className="h_link" to="faq" smooth={true} duration={500} offset={-10}>FAQ</Link>
            </nav>

        </div>
    )
}