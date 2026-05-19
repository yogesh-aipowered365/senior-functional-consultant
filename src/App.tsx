import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

function App() {
  return (
    <div className="bg-[#030712] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
