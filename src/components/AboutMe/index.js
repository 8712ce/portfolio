// IMAGES //
import cheesy from "../../assets/cheesy.jpeg"

// STYLES // 
import "./aboutMe.css"

export default function AboutMe() {
    return (
        <div id="about" className="about_me">
            <img className="about_photo" src={cheesy} alt="Portrait Photo"></img>
            
            <p className="main_text">Hello!  I'm David, a software engineer and graphic artist whose hand-painted signs and murals adorn Trader Joe's stores and various independent businesses from breweries to yoga studios across Southern California.  Recently, in an effort to shift away from the retail sector, I co-founded an EdTech startup aimed at empowering autistic students to safely navigate the complexities of modern life.</p>
            
            <p className="main_text">My computer science journey began in childhood with my first computer—yes, a familiar story, but a defining moment for me.  At the University of California, Berkeley, I initially created websites to display my comics.  But with the evolution of the internet, I moved from basic WYSIWYG editors to developing my own sites.  However, my tenure at Berkeley was fraught with challenges: I felt alienated from STEM departments and campus life in general, and struggled with severe depression as a result.  These experiences led me to switch my major to Art Practice, which was less demanding at the time.  However, my passion for web development and CSS persisted, driving me to enroll in General Assembly's Software Engineering Intensive years later.  Despite the intense pace of this bootcamp-style education and a turbulent job market, my determination remained strong.</p>

            <p className="main_text">I am keen to advance as a software engineer within a dynamic team, crafting captivating desktop and mobile app experiences.  I am also exploring machine learning to develop more professional, practical tools that will help artists generate images in their unique styles with consistency in character and background models/designs.</p>
            
            <p className="main_text">In my leisure, I delve into new programming languages, tinker with ChatGPT, create art using my Wacom tablet in Adobe's Creative Suite, and build bicycles and furniture.  My adventurous spirit takes me camping in my 2003 Toyota Tacoma and I love listening to audiobooks and podcasts.  Currently, I am working on an epic, dark fantasy graphic novel titled, <a href="https://www.webtoons.com/en/canvas/5-years/list?title_no=698587" target="_blank">5 Years</a>.</p>
        </div>
    )
}