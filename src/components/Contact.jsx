import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Demo submit - replace with backend endpoint as needed
    setTimeout(() => setStatus('Thanks, we will reach out shortly.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute right-10 top-10 w-72 h-72 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(closest-side, rgba(56,189,248,0.18), transparent)'
        }} />
      </div>

      <div className="relative container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Start the conversation</h2>
          <p className="mt-3 text-slate-300">Tell us about your target, dataset, or platform—we will propose a tailored plan.</p>
        </div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 grid gap-6 max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Name</label>
              <input required className="w-full rounded-xl bg-slate-900/60 border border-slate-800/80 focus:border-cyan-400/40 text-white p-3 outline-none" placeholder="Ada Lovelace" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input type="email" required className="w-full rounded-xl bg-slate-900/60 border border-slate-800/80 focus:border-cyan-400/40 text-white p-3 outline-none" placeholder="you@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Project Type</label>
            <select className="w-full rounded-xl bg-slate-900/60 border border-slate-800/80 focus:border-cyan-400/40 text-white p-3 outline-none">
              <option>Docking</option>
              <option>Molecular Dynamics</option>
              <option>QM/MM</option>
              <option>Binding Free Energy</option>
              <option>QSAR / ADMET</option>
              <option>Software Platform</option>
              <option>Consulting</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-2">Message</label>
            <textarea rows="5" className="w-full rounded-xl bg-slate-900/60 border border-slate-800/80 focus:border-cyan-400/40 text-white p-3 outline-none" placeholder="Briefly describe your goals and timeline" />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold px-6 py-3">
              Send message
            </button>
            <span className="text-slate-300 text-sm">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
