
export default function Navbar({ handleNavClick }) {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10 shadow-md">
            <ul className="flex justify-center gap-6">
                <li>
                    <a
                        href="#sobre-mi"
                        className="hover:text-cyan-400 transition-colors"
                        onClick={() => handleNavClick('sobre-mi')}
                    >
                        Sobre mí
                    </a>
                </li>
                <li>
                    <a
                        href="#tecnologias"
                        className="hover:text-cyan-400 transition-colors"
                        onClick={() => handleNavClick('tecnologias')}
                    >
                        Tecnologías
                    </a>
                </li>
                <li>
                    <a
                        href="#proyectos"
                        className="hover:text-cyan-400 transition-colors"
                        onClick={() => handleNavClick('proyectos')}
                    >
                        Proyectos
                    </a>
                </li>
                <li>
                    <a
                        href="#contacto"
                        className="hover:text-cyan-400 transition-colors"
                        onClick={() => handleNavClick('contacto')}
                    >
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    );
}
