import './App.css'
import ContactPage from './pages/contact_page'
import HomePage from './pages/home_page'
import ClassesPage from './pages/classes_page'
import EnrollmentPage from './pages/enrollment'
import Schedule from './pages/schedule'
import PrivacyPolicy from './pages/privacy_policies'
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
            <Route path="/videos" element={<VideoPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/classes" element={<ClassesPage/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/enrollment" element={<EnrollmentPage/>}/>
            <Route path="/privacy" element={<PrivacyPolicy/>}/>
        </Routes>
        <Footer/>
        </>
    )
}

export default App