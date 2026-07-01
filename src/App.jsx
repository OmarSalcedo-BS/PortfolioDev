import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProjectsGrid from './components/sections/ProjectsGrid';
import ProjectDetail from './components/sections/ProjectDetail';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';

function ScrollHandler() {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const pendingTarget = sessionStorage.getItem('pendingScrollTarget');

    if (pathname === '/' && pendingTarget) {
      const target = document.getElementById(pendingTarget);

      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          sessionStorage.removeItem('pendingScrollTarget');
        });
      }
      return;
    }

    if (navType !== 'POP') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, navType]);

  return null;
}

function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <ProjectsGrid />
      <Services />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen text-white font-sans antialiased selection:bg-purple-600 selection:text-white relative overflow-hidden">
        <Navbar />
        
        <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto pb-12 flex flex-col min-h-[calc(100vh-64px)] justify-between">
          <div className="space-y-24 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyecto/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
          
          <Footer /> 
        </main>
      </div>
    </Router>
  );
}