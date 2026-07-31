import AboutPage from './pages/about_page'
import ContactPage from './pages/contact_page'
import HomePage from './pages/home_page'
import VideoPage from './pages/video_page'
import Navbar from './shared_components/navbar'
import Footer from './shared_components/footer'
import { Routes, Route } from 'react-router-dom'

function App() {
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/videos" element={<VideoPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Footer/>
        </>
    )
}

export default App