import { motion } from 'framer-motion'
import { Beaker, Atom, Cpu, BrainCircuit, LineChart, FlaskConical, Network, Database, Server, Code2, Boxes } from 'lucide-react'

const labServices = [
  { icon: Beaker, title: 'Molecular Docking', desc: 'Pose prediction, virtual screening, and scoring with validated protocols.' },
  { icon: Atom, title: 'Molecular Dynamics', desc: 'Classical and enhanced sampling MD, system setup, and analysis.' },
  { icon: Cpu, title: 'QM/MM', desc: 'Hybrid quantum mechanics/molecular mechanics for accurate active-site modeling.' },
  { icon: BrainCircuit, title: 'Binding Free Energy', desc: 'MM/GBSA, FEP, and alchemical calculations to quantify affinity.' },
  { icon: LineChart, title: 'QSAR Modeling', desc: 'Feature engineering, model selection, and interpretability for activity prediction.' },
  { icon: FlaskConical, title: 'ADMET Profiling', desc: 'In silico absorption, distribution, metabolism, excretion, and toxicity.' },
  { icon: Network, title: 'Scientific Consulting', desc: 'Study design, pipelines, reproducibility, and publication-quality reporting.' },
]

const softServices = [
  { icon: Database, title: 'Data Visualization', desc: 'Interactive dashboards and plots tailored for molecular datasets.' },
  { icon: Server, title: 'DB Front/Back Ends', desc: 'Secure APIs and UIs for compound libraries, results, and pipelines.' },
  { icon: Code2, title: 'Python / C++ Engineering', desc: 'High-performance tooling, bindings, and automation for research.' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.4 } })
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full blur-3xl opacity-25" style={{
          background: 'radial-gradient(closest-side, rgba(56,189,248,0.18), transparent)' }} />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Scientific Services</h2>
          <p className="mt-3 text-slate-300">End-to-end support across computational chemistry and biophysics.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {labServices.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={itemVariants}
              className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur p-6 hover:border-cyan-400/30 hover:bg-slate-900/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                  <p className="text-slate-300/80 mt-1 text-sm leading-6">{s.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{
                background: 'radial-gradient(120px 120px at var(--x) var(--y), rgba(34,211,238,0.06), transparent 80%)'
              }} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Software Services</h2>
          <p className="mt-3 text-slate-300">Modern engineering for research platforms and tools.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {softServices.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={itemVariants}
              className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur p-6 hover:border-purple-400/30 hover:bg-slate-900/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 bg-purple-500/10 border border-purple-400/20 text-purple-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                  <p className="text-slate-300/80 mt-1 text-sm leading-6">{s.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{
                background: 'radial-gradient(120px 120px at var(--x) var(--y), rgba(168,85,247,0.06), transparent 80%)'
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
