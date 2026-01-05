
import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        const subject = encodeURIComponent(`${name} + Ganing Project`);
        const body = encodeURIComponent(message);
        const mailtoLink = `mailto:wallstreetinquries@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <footer id="contact" className="py-24 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's chat!</h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                        From the subtle interplay of shadows to the intricate details that characterize each scene, I capture photographs that narrate the essence of your subject with clarity and intent.
                    </p>

                    <div className="mt-12">
                        <a href="mailto:wallstreetinquries@gmail.com" className="text-2xl font-bold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors pb-1">
                            wallstreetinquries@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="w-full">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-neutral-900 border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-neutral-900 border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-neutral-900 border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="Tell me about your project"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                onClick={handleSend}
                                className="bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-200 transition-colors"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    <div className="mt-16 pt-8 border-t border-neutral-800 flex justify-between items-center text-sm text-gray-500">
                        <p>&copy; 2026 Ganing.</p>
                        <div className="space-x-4">
                            <a href="#" className="hover:text-white">Instagram</a>
                            <a href="#" className="hover:text-white">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
