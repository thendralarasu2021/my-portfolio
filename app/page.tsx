"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Linkedin, Mail, ExternalLink, Cpu, 
  Layers, Sparkles, User, X, CheckCircle2 
} from 'lucide-react';

interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  color: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "Game of Creators",
    shortDesc: "TikTok analytics dashboard for creators.",
    fullDesc: "Developed a functional prototype for Persist Ventures that fetches real-time data from the TikTok API. It provides creators with deep insights into engagement metrics, trend analysis, and audience growth through a sleek, interactive dashboard.",
    tags: ["Next.js", "TikTok API", "Python", "Data Viz"],
    color: "from-emerald-500 to-cyan-600",
    features: ["API Integration", "Real-time Metrics", "Engagement Analytics"]
  },
  {
    title: "Glaucoma Detection",
    shortDesc: "AI-based early stage eye disease diagnosis.",
    fullDesc: "A medical imaging project utilizing Convolutional Neural Networks (CNN) to detect Glaucoma from retinal fundus images. This system assists ophthalmologists in early diagnosis, significantly increasing the chances of successful treatment.",
    tags: ["Deep Learning", "CNN", "Python", "OpenCV"],
    color: "from-blue-500 to-indigo-600",
    features: ["Image Pre-processing", "CNN Architecture", "High Accuracy Prediction"]
  },
  {
    title: "Distance Learning in Desired Languages",
    shortDesc: "Bridging language barriers in global education.",
    fullDesc: "An innovative platform designed to empower students to learn complex technical subjects in their native languages. It features real-time AI-driven translation and interactive multi-language support to ensure quality education is accessible to all.",
    tags: ["Next.js", "AI Translation", "Node.js", "i18n"],
    color: "from-orange-500 to-red-600",
    features: ["Real-time Translation", "Multi-language UI", "LMS Integration"]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const skills = [
    { name: "Python", category: "Core" },
    { name: "Java", category: "Core" },
    { name: "ReactJS", category: "Web" },
    { name: "Next.js", category: "Web" },
    { name: "Django", category: "Backend" },
    { name: "Flask", category: "Backend" },
    { name: "Tailwind CSS", category: "Design" },
    { name: "REST APIs", category: "Dev" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 max-w-6xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Thendralarasu S
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light mb-10 tracking-[0.2em] uppercase">
            Full Stack Developer | AI Enthusiast
          </p>
          <div className="flex justify-center gap-8">
            <a href="https://linkedin.com/in/thendral-arasu-s-1b211223a" target="_blank" className="hover:text-blue-400 transition-all hover:scale-125">
              <Linkedin size={32} />
            </a>
            <a href="mailto:thenddralkaviya833@gmail.com" className="hover:text-emerald-400 transition-all hover:scale-125">
              <Mail size={32} />
            </a>
          </div>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        
        {/* Left Side: About, Education, & Skills */}
        <div className="md:col-span-1 space-y-8">
          {/* About Me */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 backdrop-blur-xl">
            <div className="flex items-center gap-4 mb-6"><User className="text-purple-400" /> <h2 className="text-xl font-bold">About Me</h2></div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I am a positive thinker and a dedicated learner. As a B.Tech IT graduate, I specialize in building scalable web applications and AI solutions.
            </p>
            <ul className="space-y-2 text-xs text-slate-500">
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> Positive Thinker</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500"/> Self-motivated & Dedicated</li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-4 mb-6"><GraduationCap className="text-blue-400" /> <h2 className="text-xl font-bold">Education</h2></div>
            <p className="text-blue-300 font-bold leading-tight text-sm">Vel Tech High Tech Engineering College</p>
            <p className="text-slate-500 text-[10px] mt-1 italic">B.Tech Information Technology (2024 Graduate)</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">8.29</span>
              <span className="text-slate-500 text-[10px] uppercase tracking-tighter text-blue-400">CGPA</span>
            </div>
          </motion.div>

          {/* Skills Card - UPDATED SECTION */}
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 border-l-emerald-500/30">
            <div className="flex items-center gap-4 mb-6"><Cpu className="text-emerald-400" /> <h2 className="text-xl font-bold">Tech Stack</h2></div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 bg-slate-800/50 rounded-xl text-[10px] font-medium border border-slate-700 hover:bg-slate-700 transition-colors cursor-default">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Projects */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-8"><Sparkles className="text-cyan-400" /> <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Featured Projects</h2></div>
          
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                layoutId={project.title}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer bg-slate-900/40 p-8 rounded-[2rem] border border-slate-800 hover:border-emerald-500/50 transition-all relative overflow-hidden"
              >
                <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
                <h3 className={`text-2xl font-black mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.shortDesc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">{t}</span>
                  ))}
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-bold">Details View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-xl">
            <motion.div 
              layoutId={selectedProject.title}
              className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className={`h-32 bg-gradient-to-r ${selectedProject.color} opacity-20`} />
              
              <div className="p-10 -mt-16">
                <div className="inline-block p-4 rounded-3xl bg-slate-900 border border-slate-800 mb-6 shadow-xl text-white">
                  <Layers size={32} />
                </div>
                <h2 className="text-4xl font-black mb-4">{selectedProject.title}</h2>
                <p className="text-slate-400 leading-relaxed mb-8">{selectedProject.fullDesc}</p>
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Implementation Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {selectedProject.features.map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                      <CheckCircle2 size={16} className="text-emerald-500" /> {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="text-xs bg-slate-800 text-slate-400 px-4 py-2 rounded-xl">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="py-10 text-center text-slate-600 text-[10px] tracking-[0.5em] uppercase">
        Built by Thendralarasu S &copy; 2026
      </footer>
    </div>
  );
}