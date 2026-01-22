import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, we'll simulate a success
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            // Construct mailto link as fallback
            window.location.href = `mailto:hello@ganing.com?subject=Inquiry from ${formData.name}&body=${formData.message} (Contact: ${formData.email})`;
        }, 1500);
    };

    return (
        <div className="pt-32 pb-20 px-4 md:px-12 max-w-[90rem] mx-auto text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                {/* Left Column: Info */}
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white">Get in Touch</h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-md">
                        We are currently accepting new projects for Q3 2025. Tell us about your vision.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Studio</h3>
                            <p className="text-lg">Jakarta Selatan, Indonesia<br />By Appointment Only</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Email</h3>
                            <a href="mailto:hello@ganing.com" className="text-lg hover:underline decoration-white underline-offset-4">hello@ganing.com</a>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Socials</h3>
                            <div className="flex gap-6">
                                <a href="#" className="text-lg hover:text-gray-400 font-medium">Instagram</a>
                                <a href="#" className="text-lg hover:text-gray-400 font-medium">LinkedIn</a>
                                <a href="#" className="text-lg hover:text-gray-400 font-medium">Behance</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold mb-2 text-white">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-white/10 transition-colors text-white placeholder-gray-500"
                                placeholder="Are you an Architect or Designer?"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-white">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-white/10 transition-colors text-white placeholder-gray-500"
                                placeholder="john@doe.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-white">Message</label>
                            <textarea
                                required
                                rows="6"
                                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-white focus:bg-white/10 transition-colors resize-none text-white placeholder-gray-500"
                                placeholder="Tell us about the project: Location, scale, and estimated timeline."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full py-4 text-black font-bold rounded-xl transition-all ${status === 'success' ? 'bg-white border-2 border-black' : 'bg-white hover:bg-gray-200'
                                }`}
                        >
                            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
