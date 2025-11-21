import { motion, useScroll, useTransform } from 'framer-motion'

export default function Showcase() {
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-slate-950">
      {/* Parallax grid */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{ backgroundImage: 'linear-gradient(rgba(56,189,248,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.25) 1px, transparent 1px)', backgroundSize: '40px 40px, 40px 40px', y: bgY }}
      />

      <div className="relative container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Why work with us</h2>
          <p className="mt-3 text-slate-300">Scientific rigor meets modern product design—clarity, speed, and reproducibility by default.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            title: 'Reproducible Pipelines',
            body: 'Containerized workflows, versioned data, and transparent reports you can trust.'
          }, {
            title: 'Performance at Scale',
            body: 'GPU acceleration and HPC-ready tooling for large libraries and long MD.'
          }, {
            title: 'Design + Science',
            body: 'Beautiful, interactive deliverables that make complex results intuitive.'
          }].map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="relative rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur p-6">
              <h3 className="text-white font-semibold text-lg">{c.title}</h3>
              <p className="text-slate-300/80 mt-2 text-sm leading-6">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
