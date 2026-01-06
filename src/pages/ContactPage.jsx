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
        // Here we would ideally call a backend API or use a service like Formspree
        // For now, we'll simulate a success
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            // Construct mailto link as fallback
            window.location.href = `mailto:hello@ganing.com?subject=Inquiry from ${formData.name}&body=${formData.message} (Contact: ${formData.email})`;
        }, 1500);
    };

    return (
        <div className="pt-32 pb-20 px-4 md:px-12 max-w-[90rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                {/* Left Column: Info */}
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Get in Touch</h1>
                    <p className="text-xl text-gray-600 mb-12 max-w-md">
                        We are currently accepting new projects for Q3 2025. Tell us about your vision.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Studio</h3>
                            <p className="text-lg">Jakarta Selatan, Indonesia<br />By Appointment Only</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email</h3>
                            <a href="mailto:hello@ganing.com" className="text-lg hover:underline decoration-black underline-offset-4">hello@ganing.com</a>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Socials</h3>
                            <div className="flex gap-6">
                                <a href="#" className="text-lg hover:text-gray-600">Instagram</a>
                                <a href="#" className="text-lg hover:text-gray-600">LinkedIn</a>
                                <a href="#" className="text-lg hover:text-gray-600">Behance</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                                placeholder="Are you an Architect or Designer?"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                                placeholder="john@doe.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">Message</label>
                            <textarea
                                required
                                rows="6"
                                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors resize-none"
                                placeholder="Tell us about the project: Location, scale, and estimated timeline."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full py-4 text-white font-bold rounded-xl transition-all ${status === 'success' ? 'bg-green-600' : 'bg-black hover:bg-gray-800'
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
