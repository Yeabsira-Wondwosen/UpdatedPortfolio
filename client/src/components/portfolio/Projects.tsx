import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: '',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and services with smooth animations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    githubLink: '',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    githubLink: '',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleGithubLinkChange = (id: number, link: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, githubLink: link } : p));
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="stagger-item group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-violet-600/20 hover:border-violet-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/20 hover:-translate-y-3 flex flex-col">
                {/* Header */}
                <div className="p-8 border-b border-violet-600/10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="px-8 py-4 border-b border-violet-600/10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold bg-violet-600/20 text-cyan-400 rounded-full border border-violet-600/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link Input */}
                <div className="p-8 flex-1 flex flex-col gap-4">
                  <label className="text-sm font-semibold text-slate-300">
                    GitHub Repository Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/username/repo"
                    value={project.githubLink}
                    onChange={(e) => handleGithubLinkChange(project.id, e.target.value)}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  />

                  {/* GitHub Button */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-violet-600/50 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
