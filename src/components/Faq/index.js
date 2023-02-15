// IMAGES //
import the_80s from "../../assets/the_80s.jpg"

// STYLES // 
import "./faq.css"

export default function Faq() {
    return (
        <div id="faq" className="faq_text">
            <b>Q:  What is your ethnic background?</b>
            <p>A:  I get asked this question so frequently!  According to the DNA tests, it's 63.1% Northwestern European, 35.6% Sub-Saharan African, 1.1% Trace Ancestry, and 0.2% Unassigned.  There you have it.</p>

            <img className="faq_photo" src={the_80s} alt="Photo of me as a kid"/>
            <b>Q:  How long have you been making art?</b>
            <p>A:  I have been drawing since my mom taught me how to hold a crayon and my dad taught me how to "stay in the lines," so maybe since 2ish-years-old?  I dabbled in watercolors for a few months in the 8th grade, but never since then.  It wasn't until about halfway through college that I bought my first canvas and acrylics and started painting.  I bought a Wacom tablet back in 2008ish.</p>

            <b>Q:  Did you do the art for all Trader Joe's stores?</b>
            <p>A:  Typically, each store has an employee that serves as an artist, either maintaining price tags or creating large paintings of corn on the cob and ultra-vintage dirigibles.  However, the management in my region liked my work so much that I was often asked to do work for other stores.  I don't think the work I did was particularly amazing, though I was told I completed my paintings/drawings faster than many other store artists.  I've created artwork for the Trader Joe's in NYC (Wine Shop) and many of the company's Southern California locations, with my favorite work hanging at the 3rd & Fairfax location in Los Angeles.</p>

            <b>Q:  Why do you look so serious?</b>
            <p>A:  Gosh, I'm not sure how to answer this one.  I am a daydreamer; so maybe I have the face of someone who's always imagining he's somewhere else?  If you see me when you're out and about, don't be intimidated.  As soon as conversation begins, you'll soon discover it's super easy to reduce my stern countenance to that of a giggling schoolboy.</p>

            <b>Q:  Can you recommend a good art school?</b>
            <p>A:  All of the people I know who attended the California Institute of the Arts (CalArts) or Art Center College of Design are amazing artists.  Check them out.</p>

            <b>Q:   What's the story behind this painting? / What does this painting mean?</b>
            <p>A:   Aw, can we talk about something more interesting instead?  Lol.</p>

        </div>
    )
}