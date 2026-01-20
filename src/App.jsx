import './App.css'

import Footer from './componenet/Footer'
import AllRouter from "./router/AllRouter"



function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-mono text-emerald-100">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_35%)]" />
      <div className="pointer-events-none noise-layer" />
      <div className="pointer-events-none scanline" />

      <AllRouter/>

      <Footer />
    </div>
  )
}

export default App
