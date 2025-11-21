import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Global backdrop pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.06]" aria-hidden style={{
        backgroundImage: 'radial-gradient(circle at 25% 10%, rgba(56,189,248,0.6), transparent 40%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.6), transparent 40%)'
      }} />

      {/* Navigation */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-white">NeonBio Compute</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
            <a href="/test" className="hover:text-cyan-300">API Test</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/80 py-10">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NeonBio Compute. All rights reserved.</p>
          <div className="text-slate-400 text-sm">Futuristic science, human-centered design.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
