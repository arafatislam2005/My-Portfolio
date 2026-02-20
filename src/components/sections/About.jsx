import React from 'react';
import { SiReact, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiNodedotjs } from 'react-icons/si';

const About = () => {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <SiReact className="text-blue-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    ];

    return (
        <section id="about" className="py-20 px-6 max-w-5xl mx-auto bg-black text-white">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Technical Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-8 bg-black border border-gray-800 rounded-2xl hover:border-blue-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-500/5"
                    >
                        <div className="text-5xl mb-4">
                            {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;