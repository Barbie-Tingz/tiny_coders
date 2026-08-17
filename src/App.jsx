import './App.css'
import { lazy, Suspense } from 'react'
import Navbar from './shared_components/navbar'
import Footer from './shared_components/footer'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/home_page'))
const ContactPage = lazy(() => import('./pages/contact_page'))
const ClassesPage = lazy(() => import('./pages/classes_page'))
const EnrollmentPage = lazy(() => import('./pages/enrollment'))
const Schedule = lazy(() => import('./pages/schedule'))
const PrivacyPolicy = lazy(() => import('./pages/privacy_policies'))
const VideoPage = lazy(() => import('./pages/video_page'))

function App() {
    return(
        <>
        <Navbar/>
        <Suspense fallback={null}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/videos" element={<VideoPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/enrollment" element={<EnrollmentPage/>}/>
                <Route path="/privacy" element={<PrivacyPolicy/>}/>
            </Routes>
        </Suspense>
        <Footer/>
        </>
    )
}

export default App