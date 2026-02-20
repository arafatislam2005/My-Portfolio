import React from 'react';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <div className="mb-8 relative">
                <div className="w-48 h-48 rounded-full border-4 border-blue-500 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    {/* Use your uploaded photo here */}
                    <img src="/src/assets/profile.jpg" alt="Md. Arafath Islam Abir" className="w-full h-full object-cover" />
                </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Md. Arafath Islam Abir
            </h1>
            <p className="text-gray-400 text-xl max-w-lg">
                Full-Stack Developer specializing in React, MongoDB, and Firebase.
            </p>
        </section>
    );
};

export default Home;