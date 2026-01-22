import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        employees: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submit logic here
        alert("Terima kasih! Tim sales kami akan menghubungi Anda segera.");
    };

    return (
        <section id="contact" className="py-24 bg-black border-t border-white/10">
            <div className="container-custom">
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row backdrop-blur-sm">

                    {/* Left: Content */}
                    <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center bg-black/40">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Siap Meningkatkan Performa Bisnis Anda?
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Diskusikan kebutuhan spesifik perusahaan Anda dengan konsultan ahli kami. Dapatkan demo produk gratis dan penawaran harga spesial.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 icon-3d">
                                    <img src={`${import.meta.env.BASE_URL}assets/3dicons/rocket.png`} alt="Fast" className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1 text-white">Implementasi Cepat</h4>
                                    <p className="text-gray-400 text-sm">Tim onboarding kami siap membantu migrasi data Anda.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 icon-3d">
                                    <img src={`${import.meta.env.BASE_URL}assets/3dicons/sheild.png`} alt="Secure" className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1 text-white">Keamanan Terjamin</h4>
                                    <p className="text-gray-400 text-sm">Sertifikasi ISO 27001 untuk perlindungan data maksimal.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-1/2 bg-white/5 p-12 lg:p-20 backdrop-blur-md">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Email Bisnis</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all text-white placeholder-gray-500"
                                        placeholder="john@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Nomor Telepon</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all text-white placeholder-gray-500"
                                        placeholder="+62 812..."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Nama Perusahaan</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all text-white placeholder-gray-500"
                                        placeholder="PT..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Jumlah Karyawan</label>
                                    <select
                                        name="employees"
                                        value={formData.employees}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all text-white"
                                    >
                                        <option value="" className="bg-black text-white">Pilih Jumlah</option>
                                        <option value="1-50" className="bg-black text-white">1 - 50</option>
                                        <option value="51-200" className="bg-black text-white">51 - 200</option>
                                        <option value="201-500" className="bg-black text-white">201 - 500</option>
                                        <option value="500+" className="bg-black text-white">500+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-300 mb-2">Pesan / Kebutuhan (Opsional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all resize-none text-white placeholder-gray-500"
                                    placeholder="Ceritakan kebutuhan bisnis Anda..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition-all"
                            >
                                Hubungi Kami
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                Dengan mengirimkan form ini, Anda menyetujui Kebijakan Privasi kami.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
