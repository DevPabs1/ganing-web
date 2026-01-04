
import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="py-24 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's chat!</h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl">
                        From the subtle interplay of shadows to the intricate details that characterize each scene, I capture photographs that narrate the essence of your subject with clarity and intent.
                    </p>

                    <div className="mt-12">
                        <a href="mailto:hello@ganing.com" className="text-2xl font-bold border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-colors pb-1">
                            hello@ganing.com
                        </a>
                    </div>
                </div>

                <div className="flex flex-col justify-between">
                    <div className="w-full">
                        {/* Simple contact form placeholder */}
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full bg-neutral-900 border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-neutral-900 border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-neutral-900 border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors" placeholder="Tell me about your project"></textarea>
                            </div>
                            <button type="button" className="bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-200 transition-colors">
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
