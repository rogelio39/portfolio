// src/components/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// // 👉 Pone tus imágenes en /src/assets con estos nombres (o cambia el import)
// import project1Img from '../assets/project1.png';
// import project2Img from '../assets/project2.png';
// import project3Img from '../assets/project3.png';

// const projects = [
//     {
//         title: 'Proyecto 1',
//         description: 'Breve descripción del proyecto 1. Qué hace, tecnologías usadas, enlace al repo o demo.',
//         image: project1Img,
//         repoLink: 'https://github.com/tu-usuario/proyecto1',
//         demoLink: 'https://tu-demo1.com'
//     },
//     {
//         title: 'Proyecto 2',
//         description: 'Breve descripción del proyecto 2. Qué desafíos resolviste, etc.',
//         image: project2Img,
//         repoLink: 'https://github.com/tu-usuario/proyecto2',
//         demoLink: 'https://tu-demo2.com'
//     },
//     {
//         title: 'Proyecto 3',
//         description: 'Breve descripción del proyecto 3. Resalta algo interesante.',
//         image: project3Img,
//         repoLink: 'https://github.com/tu-usuario/proyecto3',
//         demoLink: 'https://tu-demo3.com'
//     },
// ];

export default function Projects() {
    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">EN CONSTRUCCION</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {/* {projects.map((proj, i) => (
                    <div
                        key={i}
                        className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md flex flex-col"
                    >
                        <img
                            src={proj.image}
                            alt={proj.title}
                            className="h-40 w-full object-cover"
                        />
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                            <p className="text-sm mb-4 flex-1">{proj.description}</p>
                            <div className="mt-auto flex gap-4">
                                <a
                                    href={proj.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                                >
                                    <FaGithub /> Repo
                                </a>
                                <a
                                    href={proj.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                                >
                                    <FaExternalLinkAlt /> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
}
