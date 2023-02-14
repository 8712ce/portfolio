// IMAGES //
import s_01 from "../../assets/s_01.jpg"
import s_02 from "../../assets/s_02.jpg"
import s_03 from "../../assets/s_03.jpg"
import s_04 from "../../assets/s_04.jpg"
import s_05 from "../../assets/s_05.jpg"

// STYLES //
import "./slideshowWide.css"

export default function slideshowWide() {
    return (
        <div class="slideshow_container">

            <div class="my_slides fade">
                <img src={s_01} style="width:100%" alt="comic panel"/>
            </div>

            {/* <div class="my_slides fade">
                <img src={s_02} style="width:100%" alt="comic panel"/>
            </div>

            <div class="my_slides fade">
                <img src={s_03} style="width:100%" alt="comic panel"/>
            </div>

            <div class="my_slides fade">
                <img src={s_04} style="width:100%" alt="comic panel"/>
            </div>

            <div class="my_slides fade">
                <img src={s_05} style="width:100%" alt="comic panel"/>
            </div> */}

            {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a> */}

        </div>
    )
}