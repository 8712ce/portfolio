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
                <Link className="h_link" to="about" smooth={true} duration={500} offset={-20} >About Me</Link>
                <Link className="h_link" to="resume" smooth={true} duration={500} offset={-20}>Resume</Link>
                <Link className="h_link" to="web_dev" smooth={true} duration={500} offset={-20}>Web Development</Link>
                <Link className="h_link" to="graph_art" smooth={true} duration={500} offset={-20}>Graphic Art</Link>
                <Link className="h_link" to="faq" smooth={true} duration={500} offset={-20}>FAQ</Link>
            </nav>

        </div>
    )
}