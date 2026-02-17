import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'YOLO-OcuLite',
    subtitle: 'Ophthalmic AI for Conjunctivitis Diagnosis',
    category: 'Healthcare AI',
    emoji: '👁️',
    accent: '#22d3ee',
    description: 'A lightweight and interpretable deep learning framework for real-time conjunctivitis subtype detection in resource-constrained clinical settings.',
    problem: 'Limited ophthalmologist access in developing regions causes delayed diagnosis and preventable vision complications.',
    solution: 'YOLO-based lightweight model with Grad-CAM explainability achieving 94%+ accuracy with real-time inference on edge devices.',
    techStack: ['YOLO', 'PyTorch', 'OpenCV', 'Grad-CAM', 'FastAPI', 'Docker'],
    features: [
      'Real-time conjunctivitis subtype classification',
      'Explainable AI with attention visualization',
      'Edge-optimized for mobile deployment',
      'Clinical validation with ophthalmologists',
    ],
    links: {
      demo: 'https://drive.google.com/drive/folders/14WE4n6IfpuiBHg4eTR7SkC7BImfjL-2',
      dataset: 'https://kaggle.com/datasets/2f85a98b34624bb999d05a655b273183a194d3c5d338952e36f42508a6c2f040',
    },
  },
  {
    title: 'YOLO-ASDLite',
    subtitle: 'Behavioral AI for Autism Spectrum Disorder',
    category: 'Healthcare AI',
    emoji: '🧠',
    accent: '#818cf8',
    description: 'Computer vision system for early autism detection through behavioral pattern analysis in video data, enabling early screening.',
    problem: 'Early ASD diagnosis requires extended expert observation, limiting accessibility for underserved families.',
    solution: 'YOLO-based behavioral recognition model analyzing video frames to identify autism-indicative patterns with 91% sensitivity.',
    techStack: ['YOLO', 'PyTorch', 'OpenCV', 'Video Processing', 'NumPy'],
    features: [
      'Video-based behavioral pattern recognition',
      'Multi-class autism severity classification',
      'Non-invasive screening methodology',
      'Validated on clinical behavioral datasets',
    ],
    links: {
      demo: 'https://drive.google.com/drive/folders/14WE4n6IfpuiBHg4eTR7SkC7BImfjL-2',
      dataset: 'https://kaggle.com/datasets/9ee32f0e4ab1b475331d1f97800d9afb466d38b347496f1c711fcbd4f1660023',
    },
  },
  {
    title: 'DRL-NavBot',
    subtitle: 'Deep RL for Autonomous Robot Navigation',
    category: 'Robotics & DRL',
    emoji: '🤖',
    accent: '#34d399',
    description: 'Autonomous navigation system using Proximal Policy Optimization (PPO) for collision-free path planning in dynamic environments.',
    problem: 'Traditional path-planning algorithms struggle with dynamic obstacles and require extensive manual tuning.',
    solution: 'PPO agent trained in PyBullet simulation achieving 87% success rate with adaptive obstacle avoidance in 500K+ episodes.',
    techStack: ['PPO', 'PyTorch', 'PyBullet', 'URDF', 'OpenAI Gym', 'NumPy'],
    features: [
      'End-to-end reinforcement learning navigation',
      'Dynamic obstacle avoidance',
      'Physics-based simulation in PyBullet',
      'Transfer learning to real robot platforms',
    ],
    links: {
      demo: 'https://drive.google.com/drive/folders/14WE4n6IfpuiBHg4eTR7SkC7BImfjL-2',
      github: '#',
    },
  },
  {
    title: 'YOLO-RoboSortLite',
    subtitle: 'Robotic Waste Sorting with Computer Vision',
    category: 'Robotics & CV',
    emoji: '♻️',
    accent: '#fb923c',
    description: 'Intelligent waste sorting robotic arm combining YOLO object detection with material classification for automated recycling.',
    problem: 'Manual waste sorting is labor-intensive, inconsistent, and exposes workers to health hazards.',
    solution: 'YOLO detection integrated with robotic arm control achieving 89% classification accuracy across 5 material categories at 15 FPS.',
    techStack: ['YOLO', 'PyTorch', 'OpenCV', 'PyBullet', 'URDF', 'Fusion 360'],
    features: [
      'Multi-class waste material detection',
      'Robotic arm path planning and control',
      'URDF-based robot simulation',
      'CAD design in Fusion 360',
    ],
    links: {
      demo: 'https://drive.google.com/drive/folders/14WE4n6IfpuiBHg4eTR7SkC7BImfjL-2',
      dataset: 'https://kaggle.com/datasets/3e3a382ce823b9659c7aeb9d144b4ec32247aa17f08f47e707ce031fa6fc7f8b',
    },
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
})

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div {...fadeUp(index * 0.1)} className="group relative">
      <div
        className="rounded-2xl overflow-hidden transition-all duration-400 h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(15,26,46,0.95) 0%, rgba(13,21,41,0.95) 100%)',
          border: `1px solid rgba(34,211,238,0.1)`,
          boxShadow: 'none',
          transition: 'all 0.35s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${project.accent}40`
          e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${project.accent}20, 0 0 40px ${project.accent}10`
          e.currentTarget.style.transform = 'translateY(-6px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(34,211,238,0.1)'
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Top accent bar */}
        <div className="h-1" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
              style={{ background: `${project.accent}12`, border: `1px solid ${project.accent}25` }}>
              {project.emoji}
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: `${project.accent}12`, color: project.accent, border: `1px solid ${project.accent}25` }}>
              {project.category}
            </span>
          </div>

          <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-3">{project.subtitle}</p>
          <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Tech stack */}
        <div className="px-6 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs rounded-full font-medium"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#94a3b8' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Toggle expand */}
        <div className="px-6 pb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium flex items-center gap-1 transition-colors"
            style={{ color: project.accent }}>
            {expanded ? 'Show less ↑' : 'See details ↓'}
          </button>
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-4 space-y-3">
                {/* Problem */}
                <div className="p-3 rounded-xl" style={{ background: 'rgba(239,68,68,0.06)', borderLeft: '3px solid rgba(239,68,68,0.5)' }}>
                  <p className="text-xs font-semibold text-red-400 mb-1">Problem</p>
                  <p className="text-slate-400 text-xs">{project.problem}</p>
                </div>
                {/* Solution */}
                <div className="p-3 rounded-xl" style={{ background: 'rgba(34,197,94,0.06)', borderLeft: '3px solid rgba(34,197,94,0.5)' }}>
                  <p className="text-xs font-semibold text-green-400 mb-1">Solution</p>
                  <p className="text-slate-400 text-xs">{project.solution}</p>
                </div>
                {/* Features */}
                <div>
                  <p className="text-xs font-semibold text-slate-300 mb-2">Key Features</p>
                  <ul className="space-y-1">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                        <span style={{ color: project.accent }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer links */}
        <div className="px-6 pb-6 pt-2 flex gap-3 border-t border-white/[0.05] mt-1">
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg text-xs font-semibold transition-all duration-300"
              style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}30` }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${project.accent}25` }}
              onMouseLeave={(e) => { e.currentTarget.style.background = `${project.accent}15` }}>
              View Demo
            </a>
          )}
          {project.links.dataset && (
            <a href={project.links.dataset} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg text-xs font-semibold transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.04)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}>
              Dataset
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-lg text-xs font-semibold transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.04)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.08)' }}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: 'linear-gradient(180deg, #0d1529 0%, #0a0f1e 100%)' }}>

      <div className="absolute bottom-0 left-1/4 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-3 block">What I've Built</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Featured <span className="text-gradient-cyan">Projects</span></h2>
          <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }} />
          <p className="text-slate-400 max-w-xl mx-auto">Production-ready AI systems validated through research and real-world deployment</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div {...fadeUp(0.5)} className="text-center mt-12">
          <a href="https://drive.google.com/drive/folders/14WE4n6IfpuiBHg4eTR7SkC7BImfjL-2"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary">
            🎥 View All Project Demonstrations
          </a>
        </motion.div>
      </div>
    </section>
  )
}
