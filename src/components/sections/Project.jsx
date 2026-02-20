import React from 'react';
import { ExternalLink, Youtube } from 'lucide-react';

const projects = [
    { title: "Portfolio Web", link: "https://friendly-lamington-89d0c1.netlify.app/", tech: "React, Tailwind" },
    { title: "Auth System", link: "https://adorable-madeleine-041624.netlify.app/login", tech: "Firebase, MongoDB" },
    { title: "Tech Tutorial", link: "https://www.youtube.com/shorts/MAUGpA6vUM4", tech: "Automation", isVideo: true }
];

const Project = () => {
    return (
        <section id="project" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-blue-500 border-l-4 border-blue-500 pl-4">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                    <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all">
                        <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                        <p className="text-sm text-gray-400 mb-4">Built with {p.tech}</p>
                        <a href={p.link} target="_blank" className="flex items-center gap-2 text-blue-400 hover:underline">
                            {p.isVideo ? <Youtube size={18} /> : <ExternalLink size={18} />} View Work
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;