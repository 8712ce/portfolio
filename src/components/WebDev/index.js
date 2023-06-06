// IMAGES //
import req_rec from "../../assets/req_rec_logo.png";
import bhpca from "../../assets/bhpca_logo.jpeg";
import zombie from "../../assets/logo.jpg";

// STYLES // 
import "./web_dev.css"

export default function WebDev() {
    return (
        <div id="web_dev">
            <div className="project_card">
                <a href="https://req-recommend.herokuapp.com" target="_blank"><img className="project_logo" src={req_rec} alt="site_logo"/></a>
                <p className="project_main_text"><b><a href="https://req-recommend.herokuapp.com" target="_blank">(REQ, RECOMMEND)</a></b> I utilized a MEN stack (MongoDB, Express.js, Node.js) to build a full stack application for peers to recommend books/movies. I applied full create, read, update, & delete (CRUD) operations, hitting all RESTful API calls. I created this application with a mobile-first approach and styled it using CSS. | <a href="https://github.com/8712ce/ga_project_02" target="_blank"> GitHub Repository </a></p>
            </div>

            <div className="project_card_2">
                <p className="project_main_text_2"><b><a href="https://bvhpadvocates.org/about/ourteam" target="_blank">BAYVIEW HUNTERS POINT COMMUNITY ADVOCATES</a></b> I revamped the "Our Team" page of a WordPress site for BHPCA, an esteemed grassroots organization led by dedicated individuals who have deep ties to the vulnerable Bayview Hunters Point neighborhood in San Francisco, CA.  I collaborated closely with the co-op, skillfully aligning the page with their envisioned design aesthetics. Leveraging my expertise in Javascript, HTML, and CSS, I implemented a sophisticated modal to showcase staff profiles.</p>
                <a href="https://bvhpadvocates.org/about/ourteam" target="_blank"><img className="project_logo_2" src={bhpca} alt="site_logo"/></a>
            </div>

            <div className="project_card">
                <a href="https://little-zombie-fun-game.herokuapp.com" target="_blank"><img className="project_logo" src={zombie} alt="site_logo"/></a>
                <p className="project_main_text"><b><a href="https://little-zombie-fun-game.herokuapp.com" target="_blank">LITTLE ZOMBIE FUN GAME</a></b> Inspired by the <a href="https://www.topps.com/cards-collectibles/online-brands/garbage-pail-kids.html" target="_blank">Garbage Pail Kids</a> collection from my childhood, this is my first, solo MERN stack (MongoDB, Express.js, Node.js, React.js) application; a full stack, tongue-in-cheek game set in the zombie apocalypse. I applied full create, read, update, & delete (CRUD) operations, hitting RESTful API calls. As with all of my projects, I wireframed and planned the UI design of the application and created illustrations using Adobe Photoshop. I implemented Javascript methods to utilize an Express.js, MongoDB, and Node.js backend. | <a href="https://github.com/8712ce/ga_project_04" target="_blank"> GitHub Repository </a></p>
            </div>
        </div>
    )
}