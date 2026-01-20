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
        <section id="contact" className="py-24 bg-mekari-grey">
            <div className="container-custom">
                <div className="bg-mekari-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                    {/* Left: Content */}
                    <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Siap Meningkatkan Performa Bisnis Anda?
                        </h2>
                        <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                            Diskusikan kebutuhan spesifik perusahaan Anda dengan konsultan ahli kami. Dapatkan demo produk gratis dan penawaran harga spesial.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <img src="/assets/3dicons/rocket.png" alt="Fast" className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Implementasi Cepat</h4>
                                    <p className="text-blue-200 text-sm">Tim onboarding kami siap membantu migrasi data Anda.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <img src="/assets/3dicons/sheild.png" alt="Secure" className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-1">Keamanan Terjamin</h4>
                                    <p className="text-blue-200 text-sm">Sertifikasi ISO 27001 untuk perlindungan data maksimal.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:w-1/2 bg-white p-12 lg:p-20">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-mekari-dark mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-mekari-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-mekari-dark mb-2">Email Bisnis</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-mekari-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="john@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-mekari-dark mb-2">Nomor Telepon</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-mekari-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="+62 812..."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-mekari-dark mb-2">Nama Perusahaan</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-mekari-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="PT..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-mekari-dark mb-2">Jumlah Karyawan</label>
                                    <select
                                        name="employees"
                                        value={formData.employees}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-mekari-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                                    >
                                        <option value="">Pilih Jumlah</option>
                                        <option value="1-50">1 - 50</option>
                                        <option value="51-200">51 - 200</option>
                                        <option value="201-500">201 - 500</option>
                                        <option value="500+">500+</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-mekari-dark mb-2">Pesan / Kebutuhan (Opsional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-mekari-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                                    placeholder="Ceritakan kebutuhan bisnis Anda..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-mekari-blue text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all"
                            >
                                Hubungi Sales
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
