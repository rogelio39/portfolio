import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="text-center mt-10">
            <div className="flex justify-center gap-6">
                <a
                    href="https://wa.me/3813604435"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaWhatsapp className="text-green-500 text-4xl hover:scale-110 transition-transform" />
                </a>

            </div>
        </footer>
    );
}