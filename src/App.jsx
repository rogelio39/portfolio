
import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SkillIcons from './components/SkillIcons';
import SkillInfo from './components/SkillInfo';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('sobre-mi');
  const [activeSkill, setActiveSkill] = useState(null);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setActiveSkill(null); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <Navbar handleNavClick={handleNavClick} />

      <main className="flex-grow pt-20">
        {activeSection === 'tecnologias' && (
          <div className="fixed inset-0 bg-slate-800 bg-opacity-20 backdrop-blur-md flex items-center justify-center p-6">
            <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] bg-opacity-50 backdrop-blur-md p-10 rounded-lg max-w-4xl w-full flex flex-col items-center">
              <SkillIcons
                activeSkill={activeSkill}
                setActiveSkill={setActiveSkill}
              />
            
              {activeSkill !== null && (
                <div className="mt-6 w-full">
                  <SkillInfo activeSkill={activeSkill} />
                </div>
              )}
            </div>
          </div>
        )}

        {activeSection === 'sobre-mi' && (
          <section id="sobre-mi" className="p-10 bg-gray-800 rounded-lg shadow-md">
            <Header />
          </section>
        )}
        {activeSection === 'proyectos' && (
          <section id="proyectos" className="p-10 bg-gray-800 rounded-lg shadow-md">
            <Projects />
          </section>
        )}
      
        <Footer />
      </main>
    </div>
  );
}
