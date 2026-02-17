import React from 'react'
import { motion } from 'framer-motion'

const pubs = [
  {
    title: 'YOLO-CEGNet: A lightweight deep learning framework for real-time conjunctivitis diagnosis and clinical decision support',
    authors: 'Adeel Asghar, et al.',
    journal: 'Computer Methods and Programs in Biomedicine',
    status: 'Under Review',
    id: 'CMPB-D25-06294',
    year: '2025',
    abstract: 'This study presents YOLO-CEGNet, a lightweight deep learning framework designed for real-time conjunctivitis diagnosis in resource-constrained clinical environments. The model achieves state-of-the-art performance while maintaining computational efficiency suitable for edge deployment.',
    keywords: ['Deep Learning', 'YOLO', 'Conjunctivitis', 'Medical AI', 'Clinical Decision Support', 'Explainable AI'],
    accent: '#22d3ee',
  },
  {
    title: 'YOLO-CEDNet: A Lightweight Sensor Data Processing Framework for Real-Time Conjunctivitis Detection via Optical Ocular Imaging',
    authors: 'Adeel Asghar, et al.',
    journal: 'IEEE Sensors Journal',
    status: 'Under Review',
    id: 'Sensors-102306-2026',
    year: '2026',
    abstract: 'We propose YOLO-CEDNet, an innovative sensor data processing framework that integrates optical imaging with deep learning for real-time conjunctivitis detection. The framework demonstrates robust performance across diverse imaging conditions and patient demographics.',
    keywords: ['Sensor Data Processing', 'YOLO', 'Optical Imaging', 'Conjunctivitis Detection', 'Real-time Processing', 'Edge Computing'],
    accent: '#818cf8',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1529 100%)' }}>

      <div className="absolute top-0 left-1/4 w-96 h-96 opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto relative">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-3 block">Academic Work</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Research <span className="text-gradient-cyan">Publications</span></h2>
          <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }} />
          <p className="text-slate-400">Peer-reviewed research in medical AI and computer vision</p>
        </motion.div>

        <div className="space-y-6">
          {pubs.map((pub, i) => (
            <motion.div key={pub.id} {...fadeUp(0.15 + i * 0.15)}
              className="p-7 rounded-2xl relative overflow-hidden transition-all duration-350"
              style={{
                background: 'linear-gradient(135deg, rgba(15,26,46,0.95) 0%, rgba(13,21,41,0.95) 100%)',
                border: '1px solid rgba(34,211,238,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${pub.accent}35`
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,0.4), 0 0 0 1px ${pub.accent}15`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,211,238,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, ${pub.accent}, transparent)` }} />

              <div className="flex items-start gap-5">
                {/* Document icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${pub.accent}12`, border: `1px solid ${pub.accent}25` }}>
                  <svg className="w-7 h-7" fill="none" stroke={pub.accent} viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.25)' }}>
                      {pub.status}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${pub.accent}12`, color: pub.accent, border: `1px solid ${pub.accent}25` }}>
                      Journal Article
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{pub.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-base leading-snug mb-3">{pub.title}</h3>

                  {/* Meta */}
                  <div className="space-y-1 mb-4 text-sm">
                    <p className="text-slate-400">
                      <span className="text-slate-300 font-medium">Authors:</span> {pub.authors}
                    </p>
                    <p className="text-slate-400">
                      <span className="text-slate-300 font-medium">Journal:</span>{' '}
                      <span className="italic">{pub.journal}</span>
                    </p>
                    <p className="text-slate-500 text-xs">
                      <span className="font-medium">Manuscript ID:</span> {pub.id}
                    </p>
                  </div>

                  {/* Abstract */}
                  <div className="p-4 rounded-xl mb-4 text-sm text-slate-400 leading-relaxed"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-slate-300 font-medium text-xs block mb-1">Abstract</span>
                    {pub.abstract}
                  </div>

                  {/* Keywords */}
                  <div>
                    <span className="text-slate-300 font-medium text-xs mb-2 block">Keywords</span>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.keywords.map((k) => (
                        <span key={k} className="px-2.5 py-1 text-xs rounded-full font-medium"
                          style={{ background: `${pub.accent}10`, color: pub.accent, border: `1px solid ${pub.accent}20` }}>
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.5)} className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
            style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)' }}>
            <span className="text-[#22d3ee] font-bold text-lg">2</span>
            <span className="text-slate-400 text-sm">manuscripts currently under peer review — focusing on lightweight AI for medical diagnostics</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
