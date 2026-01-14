
import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill in all fields (Name, Email, and Message) before sending.');
            return;
        }

        setIsLoading(true);

        try {
            // Determine API URL based on environment or default
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/contact';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            // Handle non-JSON responses or errors gracefully
            const contentType = response.headers.get("content-type");
            let data;
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
            } else {
                throw new Error("Non-JSON response from server");
            }

            if (data.success) {
                alert('Message sent successfully! We will get back to you soon.');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error(data.message || "Failed to send");
            }
        } catch (error) {
            console.warn('Backend API unreachable or failed, falling back to mailto:', error);

            // Fallback to Mailto
            const subject = encodeURIComponent(`${name} - Ganing Inquiry`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:wallstreetinquries@gmail.com?subject=${subject}&body=${body}`;

            alert('Unable to connect to the email server directly. Opening your default email client instead.');
        } finally {
            setIsLoading(false);
        }
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
                                disabled={isLoading}
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
                                disabled={isLoading}
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
                                disabled={isLoading}
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            onClick={handleSend}
                            disabled={isLoading}
                            className={`w-full bg-white text-black px-8 py-5 rounded-xl font-bold tracking-wide hover:bg-gray-200 transition-colors text-lg mt-4 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
