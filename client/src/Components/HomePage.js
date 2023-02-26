import Header from '../Components/Header.js';
import Introtxt from '../Components/Introtxt';
import Skills from '../Components/Skills';
import Socials from '../Components/Socials';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import '../CSS/HomePage.css'

function HomePage() {
    return (
        <div>
            <div id='homePage'>
                <Header/>
                <Introtxt/>
                <Skills/>
                <Socials/>
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage
