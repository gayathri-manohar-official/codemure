import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/Home';
import Contact from './pages/ContactPage/ContactUs'
import Projects from './pages/ProjectsPage/Projects'
import ToolsPage from './pages/ToolsPage/ToolsPage';
import PrivacyPolicy from './pages/PrivacyPolicyPage/PrivacyPolicy';
import TermsOfService from './pages/TermsOfServicePage/TermsOfServices';
import CaseStudy from './pages/CaseStudyPage/CaseStudy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BusinessPage from './pages/BusinessPage/BusinessPage';
import StudentsPage from './pages/StudentsPage/StudentsPage';
import StudentsProjects from './pages/StudentsPage/StudentsProjects';
import StudentsInternship from './pages/StudentsPage/StudentsInternship';
import OwnProjectIdea from './pages/StudentsPage/OwnProjectIdea';
import ExploreIdeas from './pages/StudentsPage/ExploreIdeas';
import ProjectIdeaDetails from './pages/StudentsPage/ProjectIdeaDetails';
import BrainstormIdea from './pages/StudentsPage/BrainstormIdea';
import InternshipDetails from './pages/StudentsPage/InternshipDetails';
import SeoManager from './seo/SeoManager';

function App() {

  return (
    <BrowserRouter>
      <SeoManager />
      <ScrollToTop />
      <main className='app-content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/tools' element={<ToolsPage/>}/>
          <Route path='/projects/:projectId' element={<CaseStudy />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/services/business' element={<BusinessPage/>}/>
          <Route path='/services/students' element={<StudentsPage/>}/>
          <Route path='/services/students/projects' element={<StudentsProjects/>}/>
          <Route path='/services/students/internship' element={<StudentsInternship/>}/>
          <Route path='/services/students/projects/own-project-idea' element={<OwnProjectIdea/>}/>
          <Route path='/services/students/projects/explore-ideas' element={<ExploreIdeas/>}/>
          <Route path='/services/students/projects/explore-ideas/:ideaId' element={<ProjectIdeaDetails/>}/>
          <Route path='/services/students/projects/brainstorm-idea' element={<BrainstormIdea/>}/>
          <Route path='/services/students/internship/:programId' element={<InternshipDetails/>}/>
        </Routes>
        <Footer />
      </main>
      <Analytics />
    </BrowserRouter>
  )
}

export default App