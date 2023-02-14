// IMAGES //
import signature from "../../assets/signature.jpg"

// STYLES // 
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <img className="sig" src={signature} alt="David Milton Signature Logo" />

            <nav>
                <p>Home</p>
                <p>About Me</p>
                <p>Resume</p>
                <p>Web Development</p>
                <p>Graphic Art</p>
            </nav>

        </div>
    )
}