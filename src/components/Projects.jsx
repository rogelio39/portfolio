import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        title: 'Mi Portafolio',
        image: 'portfolio.png',
        link: 'https://portfolio-i8lq.onrender.com/',
        description: 'Un portafolio moderno creado con React y Tailwind CSS.',
        techs: ['React', 'Tailwind CSS']
    },

    {
        title: 'Tasklist',
        image: 'tasklist.png',
        link: 'http://tasklist-w39h.onrender.com/',
        description: 'Tasklist básico construido con React, Firebase y express y mongodb.',
        techs: ['React', 'Firebase', 'express', 'mongodb']
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="proyectos" className="py-20 px-6 bg-gray-900 text-white relative">
            <h2 className="text-3xl font-bold text-center mb-10">Proyectos</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-300 text-sm">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal animado */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        onClick={() => setSelectedProject(null)} // click fuera cierra
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 w-full max-w-lg text-white relative shadow-xl"
                            onClick={e => e.stopPropagation()} // evita cerrar al click dentro
                        >
                            {/* Botón de cierre */}
                            <button
                                className="absolute top-2 right-3 text-2xl text-white hover:text-red-400"
                                onClick={() => setSelectedProject(null)}
                            >
                                &times;
                            </button>

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-52 object-cover rounded mb-4"
                            />
                            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                            <p className="mt-2">{selectedProject.description}</p>

                            {selectedProject.techs && (
                                <div className="mt-4">
                                    <h4 className="font-semibold">Tecnologías usadas:</h4>
                                    <ul className="flex gap-3 mt-1 flex-wrap text-sm">
                                        {selectedProject.techs.map((tech, i) => (
                                            <li key={i} className="bg-cyan-700 px-3 py-1 rounded-full">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded transition-colors"
                            >
                                Ver proyecto
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
