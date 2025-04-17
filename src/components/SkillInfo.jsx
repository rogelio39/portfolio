// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const skillDescriptions = [
    'Conozco HTML5, incluyendo etiquetas semánticas y buenas prácticas de accesibilidad.',
    'Manejo CSS con Flexbox, Grid, media queries y animaciones básicas.',
    'Uso JS moderno (ES6+), funciones, promesas, y manipulación del DOM.',
    'Trabajo con hooks, props, estados y arquitectura de componentes.',
];

export default function SkillInfo({ activeSkill }) {
    return (
        <AnimatePresence>
            {activeSkill !== null && (
                <motion.div
                    key={activeSkill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white shadow-md rounded-md p-4 max-w-md w-full text-left"
                >
                    <h3 className="text-lg font-semibold mb-2">
                        {['HTML', 'CSS', 'JavaScript', 'React'][activeSkill]}
                    </h3>
                    <p className=' text-slate-900'>{skillDescriptions[activeSkill]}</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}