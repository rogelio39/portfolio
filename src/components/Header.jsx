export default function Header() {
    return (
        <header className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
                <p className="mb-4">
                    ¡Hola! Soy <strong>Rogelio Suleta</strong>, un desarrollador frontend que comenzó su camino en la programación a través del curso de <strong>Coderhouse</strong>.
                    Desde entonces, me apasiona construir interfaces web modernas, accesibles y fáciles de usar.
                </p>
                <p className="mb-4">
                    Aunque estoy perfeccionando mis habilidades, me esfuerzo por escribir código limpio y bien estructurado. Durante mi formación, me enfoqué en herramientas como <strong>HTML, CSS, JavaScript y React</strong>.
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Me gusta aplicar principios de diseño para mejorar la experiencia del usuario.</li>
                    <li>Disfruto aprendiendo nuevas tecnologías y mejorando mis habilidades constantemente.</li>
                </ul>
                <p className="mb-4">
                    Cuando no estoy programando, me gusta salir a andar en bici, escuchar música y seguir aprendiendo cosas nuevas cada día.
                </p>
                <p>
                    📫 <a href="mailto:andresrogesu@gmail.com" className="text-cyan-400 hover:underline">Contáctame</a> si quieres hablar sobre proyectos o oportunidades.
                </p>

        </header>
    );
}