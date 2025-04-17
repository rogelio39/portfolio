
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';

const skills = [
    {
        name: 'HTML',
        icon: <FaHtml5 className="text-orange-600 text-6xl" />,
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt className="text-blue-600 text-6xl" />,
    },
    {
        name: 'JavaScript',
        icon: <FaJs className="text-yellow-400 text-6xl" />,
    },
    {
        name: 'React',
        icon: <FaReact className="text-cyan-400 text-6xl" />,
    },
];

export default function SkillIcons({ activeSkill, setActiveSkill }) {
    return (
        <div className="flex gap-6  flex-wrap justify-center mb-6">
            {skills.map((skill, i) => (
                <button
                    key={i}
                    onClick={() => setActiveSkill(i === activeSkill ? null : i)}
                    className="flex flex-col items-center hover:scale-110 transition-transform"
                >
                    {skill.icon}
                    <span className="mt-1 text-sm">{skill.name}</span>
                </button>
            ))}
        </div>
    );
}
