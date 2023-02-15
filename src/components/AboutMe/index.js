// IMAGES //
import cheesy from "../../assets/cheesy.jpeg"

// STYLES // 
import "./aboutMe.css"

export default function AboutMe() {
    return (
        <div id="about" className="about_me">
            <p className="main_text">Hello!  My name is David. I am a software engineer and graphic artist. My hand-painted signage and murals live in Trader Joe’s grocery stores and many independent businesses (from breweries to yoga studios) throughout Southern California.</p>
            
            <p className="main_text">In college, I started building simple websites to host my comics, but with the rise of web-based/web-hosted software, I eventually stopped WYSIWYG-ing my own sites. However, my love for tinkering with CSS and figuring out how to make web browsers work for me never waned, so I am currently transitioning into a professional career in web development. I am eager to grow as a developer with a competitive team and to ultimately create and implement fun, whimsical, story-based experiences for (mobile) app users.</p>
            
            <p className="main_text">I spend all of my free time studying programming languages, using my Wacom tablet with Adobe's Creative Suite, building bicycles and furniture, camping in the middle of nowhere with my 2003 Toyota Tacoma, and listening to audiobooks/podcasts. I am currently working on an epic, dark fantasy graphic novel, <a href="https://www.webtoons.com/en/challenge/cleo-bjorn/list?title_no=698587&webtoon-platform-redirect=true" target="_blank">Cleo & Bjørn</a>.</p>

            <img className="about_photo" src={cheesy} alt="Portrait Photo"></img>

        </div>
    )
}