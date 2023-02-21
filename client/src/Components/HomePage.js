import Header from '../Components/Header';
import Introtxt from '../Components/Introtxt';
import Skills from '../Components/Skills';
import Socials from '../Components/Socials';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';

function HomePage() {
    return (
        <div>
            <div id='homePage'>
                <Header/>
                <Introtxt/>
                <Skills/>
                <Socials/>
                <ContactForm/>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage
