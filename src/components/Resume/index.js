// DEPENDENCIES //
import { Link } from "react-router-dom";

// IMAGES //
import resume from "../../assets/resume.pdf";
import s_01 from "../../assets/s_01.jpg";

// STYLES // 
import "./resume.css"

export default function Resume() {
    return (
        <div id="resume">
            <div className="resume_text">
                <p><b>SKILLS</b></p>
                    <ul>
                        <li>CSS | CSS Frameworks (Bootstrap, Bulma & Materialize) | Django | DOM | EJS | Express.js | Flexbox | GitHub | HTML | JavaScript | JSON | MongoDB | MVC | Node.js | PostgreSQL | Python | React.js (My new religion!) | REST APIs | UX/UI | WordPress</li>
                        <li>+</li>
                        <li>Adobe Creative Suite (Illustrator, InDesign & Photoshop in particular) | Autodesk Sketchbook Pro | Microsoft Office Suite</li>
                        <li>+</li>
                        <li>Crayon, Marker, Mixed Media, Paint (Acrylic/Digital/Oil), Wacom Tablet, Wood, Pencil & Ink</li>
                        <li>+</li>
                        <li>Best Practices | Collaboration | Communication Skills | Creative Thinking | Customer Service | Dependability | Detail Oriented | Intercultural Fluency | Multitasking | Organization Skills | Problem Solving | Teamwork | Time Management</li>
                    </ul>
            </div>

            <div className="resume_text">    
                <p><b>EDUCATION</b></p>
                    <ul>
                        <li><a href="https://www.generalassemb.ly" target="_blank">General Assembly</a>, Software Engineering Intensive</li>
                        <li><a href="https://www.berkeley.edu" target="_blank">University of California, Berkeley</a>, B.A., Practice of Art</li>
                    </ul>
            </div>

            <div className="resume_text">
                <p><b>WORK EXPERIENCE</b></p>
                    <ul>
                        <li>Full Stack Developer | EdTech (Startup)</li>
                        <li>Frontend Developer | Co-Op Startup</li>
                        <li>Graphic Artist (Using Traditional & Digital Mediums) / Software Engineer | Freelance</li>
                        <li>Lead Sign Artist & Muralist | <a href="https://www.traderjoes.com" target="_blank">Trader Joe's</a></li>
                        <li>Graphic Artist | Clarke Directory Publications Inc.</li>
                    </ul>
            </div>

            <div className="resume_text">
                <a href={resume} target="_blank" rel="noopener noreferrer">View Resume as PDF</a>
            </div>

        </div>
    )
}