import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Research Assistant',
    org: 'Islamia University of Bahawalpur',
    location: 'Bahawalpur, Pakistan',
    period: 'July 2024 – Present',
    type: 'Research',
    accent: '#22d3ee',
    description: 'Advancing lightweight deep learning and medical AI research in collaboration with international institutions.',
    achievements: [
      'Developed YOLO-based lightweight frameworks for real-time conjunctivitis diagnosis with clinical validation',
      'Curated and annotated medical imaging datasets for ophthalmic AI applications',
      'Implemented explainability techniques (Grad-CAM, SHAP) for clinical decision support systems',
      'Collaborated with University of Shanghai for Science and Technology (USST) on joint research projects',
      'Prepared research manuscripts for peer-reviewed journals (CMPB, IEEE Sensors Journal)',
      'Conducted model optimization and evaluation studies for resource-constrained deployment',
    ],
  },
  {
    title: 'Freelance AI / ML Engineer',
    org: 'Independent Contractor',
    location: 'Remote',
    period: 'June 2024 – Present',
    type: 'Engineering',
    accent: '#818cf8',
    description: 'Delivering end-to-end AI/ML solutions for international and local clients.',
    achievements: [
      'Designed and deployed computer vision models using YOLO and OpenCV for real-time object detection',
      'Developed deep reinforcement learning agents (DQN, PPO) for autonomous navigation systems',
      'Built robotics simulation environments using PyBullet and URDF modeling for industrial applications',
      'Implemented complete ML pipelines from data preprocessing to model deployment on cloud infrastructure',
      'Created automated systems for waste sorting and material classification using robotic arms',
      'Consulted on AI strategy and technical architecture for client projects',
    ],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#0a0f1e' }}>

      <div className="absolute top-0 right-1/4 w-80 h-80 opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto relative">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-3 block">My Journey</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Work <span className="text-gradient-cyan">Experience</span></h2>
          <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }} />
          <p className="text-slate-400">Building AI systems from research to production</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div key={exp.title} {...fadeUp(0.15 + i * 0.15)}
              className="group p-7 rounded-2xl relative overflow-hidden transition-all duration-350"
              style={{
                background: 'linear-gradient(135deg, rgba(15,26,46,0.95) 0%, rgba(13,21,41,0.95) 100%)',
                border: '1px solid rgba(34,211,238,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${exp.accent}35`
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,0.4), 0 0 0 1px ${exp.accent}15`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,211,238,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                style={{ background: `linear-gradient(to bottom, ${exp.accent}, transparent)` }} />

              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${exp.accent}12`, border: `1px solid ${exp.accent}25` }}>
                    <svg className="w-6 h-6" fill="none" stroke={exp.accent} viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{exp.title}</h3>
                    <p className="text-slate-300 font-medium text-sm">{exp.org}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ background: `${exp.accent}12`, color: exp.accent, border: `1px solid ${exp.accent}25` }}>
                    {exp.period}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: `${exp.accent}25` }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm italic mb-5 pl-16">{exp.description}</p>

              {/* Achievements */}
              <div className="pl-16 space-y-2.5">
                <p className="text-slate-300 font-semibold text-sm mb-3">Key Contributions</p>
                {exp.achievements.map((a, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: exp.accent, boxShadow: `0 0 6px ${exp.accent}` }} />
                    <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.5)} className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)' }}>
            <span className="text-[#22d3ee] font-bold text-lg">2+</span>
            <span className="text-slate-400 text-sm">years of hands-on AI/ML development — research, engineering, and production deployment</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
