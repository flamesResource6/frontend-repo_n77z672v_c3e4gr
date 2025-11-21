import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const titleY = useTransform(scrollY, [0, 400], [0, -60])
  const glowOpacity = useTransform(scrollY, [0, 400], [1, 0.4])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/60 to-slate-950" />

      {/* Floating particles (subtle) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-20 w-80 h-80 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(closest-side, rgba(34,211,238,0.35), transparent)',
        }} />
        <div className="absolute bottom-[-6rem] left-16 w-96 h-96 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(closest-side, rgba(168,85,247,0.35), transparent)',
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 py-28 flex flex-col items-start">
        <motion.div style={{ y: titleY, opacity: glowOpacity }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Computational Drug Discovery & Scientific Software
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Accelerate molecules to medicines with advanced computation
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            We combine molecular simulation, AI-driven modeling, and robust engineering to design, analyze, and deliver impactful results—end to end.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-3 transition-colors">
              Start a project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/50 hover:bg-slate-800/60 text-slate-200 px-5 py-3">
              Explore capabilities
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scrolling code background at the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <motion.pre
          aria-hidden
          initial={{ y: 0 }}
          animate={{ y: ['0%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="whitespace-pre text-xs leading-6 text-cyan-300/25 font-mono px-6"
        >
{`# pseudo-workflow
ligand = prepare_ligand('candidate.sdf')
protein = prepare_protein('target.pdb')
pose = dock(protein, ligand, exhaustiveness=16)
md = run_md(pose, solvent='TIP3P', steps=2_000_000)
mmgbsa = binding_free_energy(md.last_ns)
ads = admet_predict(ligand)
report = assemble_report(pose, md, mmgbsa, admet=ads)
`}
        </motion.pre>
      </div>
    </section>
  )
}
