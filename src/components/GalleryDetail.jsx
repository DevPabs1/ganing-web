import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleries } from '../data';

const GalleryDetail = () => {
    const { id } = useParams();
    const article = galleries.find(g => g.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6 text-mekari-dark">Article Not Found</h2>
                    <Link to="/gallery" className="text-mekari-blue font-bold hover:underline">Kembali ke Resource Center</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            {/* Blog Header */}
            <div className="container-custom max-w-4xl mx-auto text-center mb-12">
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-50 text-mekari-blue text-xs font-bold uppercase tracking-wider">
                    {article.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-mekari-dark leading-tight mb-6">
                    {article.title}
                </h1>
                <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>5 Menit Baca</span>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container-custom mb-16">
                <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-lg">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Article Content */}
            <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                    <article className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed">
                        <p className="lead text-xl text-gray-800 font-medium mb-8">
                            Dalam lanskap bisnis yang terus berubah, adaptabilitas adalah kunci. Artikel ini membahas bagaimana teknologi dapat menjadi katalisator bagi pertumbuhan perusahaan Anda.
                        </p>

                        <h3>Mengapa Digitalisasi Penting?</h3>
                        <p>
                            Efisiensi operasional bukan lagi sekadar pilihan, melainkan keharusan untuk bertahan dalam kompetisi global. Dengan mengadopsi solusi SaaS yang tepat, perusahaan dapat memangkas biaya operasional hingga 30% dalam tahun pertama.
                        </p>

                        <h3>Strategi Implementasi</h3>
                        <p>
                            Jangan mencoba mengubah segalanya sekaligus. Mulailah dari proses yang paling memakan waktu ("low hanging fruits"), seperti:
                        </p>
                        <ul>
                            <li>Otomatisasi penggajian (Payroll)</li>
                            <li>Pencatatan keuangan real-time</li>
                            <li>Manajemen database pelanggan (CRM)</li>
                        </ul>

                        <blockquote>
                            "Investasi pada teknologi bukan pengeluaran, melainkan fondasi untuk skalabilitas masa depan."
                        </blockquote>

                        <h3>Kesimpulan</h3>
                        <p>
                            Langkah pertama transformasi digital dimulai dari mindset. Mekari hadir untuk mendampingi setiap langkah perubahan tersebut dengan ekosistem produk yang terintegrasi.
                        </p>
                    </article>

                    {/* Share / Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-2">
                        {['Bisnis', 'Teknologi', 'SaaS', 'Pertumbuhan'].map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm">#{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    {/* CTA Box */}
                    <div className="bg-mekari-blue rounded-2xl p-8 text-white text-center">
                        <h3 className="font-bold text-xl mb-4">Ingin Diskusi Lebih Lanjut?</h3>
                        <p className="text-blue-100 text-sm mb-6">Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami secara gratis.</p>
                        <Link to="/appointment" className="block w-full py-3 bg-white text-mekari-blue font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors">
                            Jadwalkan Demo
                        </Link>
                    </div>

                    {/* Related Articles */}
                    <div>
                        <h4 className="font-bold text-mekari-dark mb-4 uppercase text-sm tracking-wider">Artikel Terkait</h4>
                        <div className="space-y-4">
                            {galleries.filter(g => g.id !== id).slice(0, 3).map(item => (
                                <Link key={item.id} to={`/gallery/${item.id}`} className="flex gap-4 group">
                                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-sm text-mekari-dark group-hover:text-mekari-blue leading-snug line-clamp-2">{item.title}</h5>
                                        <span className="text-xs text-gray-400 mt-1 block">{item.date}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryDetail;
