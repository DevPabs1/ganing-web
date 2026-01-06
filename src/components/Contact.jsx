
import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill in all fields (Name, Email, and Message) before sending.');
            return;
        }

        const subject = encodeURIComponent(`${name} + Ganing Project`);
        const body = encodeURIComponent(`From: ${email}\n\n${message}`);
        const mailtoLink = `mailto:wallstreetinquries@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-32 px-6 bg-black text-white">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
                <div>
                    <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tight leading-[0.9]">
                        Let's <br />
                        <span className="text-neutral-500">Collaborate.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                        Have a project in mind? Let's create something timeless together.
                        Reach out for inquiries or just to say hello.
                    </p>

                    <div className="mt-16">
                        <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Direct Email</p>
                        <a href="mailto:wallstreetinquries@gmail.com" className="text-2xl md:text-3xl font-bold border-b border-white/30 hover:border-white transition-colors pb-2 hover:text-white">
                            wallstreetinquries@gmail.com
                        </a>
                    </div>
                </div>

                <div className="w-full bg-neutral-900/50 p-8 md:p-12 rounded-3xl border border-neutral-800 backdrop-blur-sm">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                            <input
                                type="text"
                                className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-700"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-700"
                                placeholder="john@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-black border border-neutral-800 rounded-xl p-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-700"
                                placeholder="Tell me about your vision..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            onClick={handleSend}
                            className="w-full bg-white text-black px-8 py-5 rounded-xl font-bold tracking-wide hover:bg-gray-200 transition-colors text-lg mt-4"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
