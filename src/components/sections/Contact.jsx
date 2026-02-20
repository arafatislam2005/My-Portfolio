import { Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 bg-black text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Get In Touch
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <a href="mailto:islam.arafat.2005@gmail.com" className="flex items-center gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500 transition-all">
                        <Mail className="text-blue-500" />
                        <span>islam.arafat.2005@gmail.com</span>
                    </a>
                    <div className="flex items-center gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-blue-500 transition-all">
                        <Phone className="text-blue-500" />
                        <span>01701861821</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;