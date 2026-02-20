import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-900/30">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center p-6 bg-gray-900 rounded-2xl">
                        <Mail className="text-blue-500 mb-4" size={32} />
                        <p className="text-gray-300">islam.arafat.2005@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center p-6 bg-gray-900 rounded-2xl">
                        <Phone className="text-blue-500 mb-4" size={32} />
                        <p className="text-gray-300">01701861821</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;