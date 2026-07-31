import AboutPage from './pages/about_page'
import ContactPage from './pages/contact_page'
import HomePage from './pages/home_page'
import VideoPage from './pages/video_page'
import Navbar from './shared_components/navbar'
import Footer from './shared_components/footer'

function App() {
    return(
        <>
        <Navbar/>
        <HomePage/>
        <AboutPage/>
        <ContactPage/>
        <VideoPage/>
        <Footer/>
        </>
    )
}

export default App