import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import ProductHero from './ProductHero';
import StickyNav from './StickyNav';
import FeatureZigZag from './FeatureZigZag';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6 text-mekari-dark">Project Not Found</h2>
                    <Link to="/" className="text-mekari-blue font-bold hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    // Mock data to simulate rich content for each project
    const sections = [
        { id: 'overview', label: 'Ringkasan' },
        { id: 'features', label: 'Fitur Unggulan' },
        { id: 'specs', label: 'Spesifikasi' },
        { id: 'reviews', label: 'Testimoni' },
    ];

    // Generate dynamic features based on the project content
    const features = [
        {
            id: 'overview',
            tagline: 'Ringkasan Project',
            title: `Tentang ${project.title}`,
            description: `<p class="mb-4">${project.description || 'Solusi komprehensif untuk kebutuhan bisnis modern Anda.'}</p><p>Project ini dirancang dengan pendekatan user-centric untuk memastikan kemudahan penggunaan dan skalabilitas maksimal.</p>`,
            image: project.image,
        },
        {
            id: 'features',
            tagline: 'Teknologi Terkini',
            title: 'Integrasi Tanpa Batas',
            description: 'Hubungkan seluruh ekosistem digital Anda dalam satu platform terpadu. Dukungan API yang lengkap memudahkan sinkronisasi data antar aplikasi.',
            image: null, // Will show placeholder or reuse image
            link: '#'
        },
        {
            id: 'specs',
            tagline: 'Keamanan Tingkat Enterprise',
            title: 'Standar Keamanan Internasional',
            description: 'Kami memprioritaskan keamanan data Anda dengan enkripsi end-to-end dan kepatuhan terhadap standar ISO 27001.',
            image: null
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Product Hero */}
            <ProductHero
                title={project.title}
                description={`Solusi "${project.location}" terbaik untuk mengakselerasi pertumbuhan bisnis Anda. Dapatkan visibilitas penuh dan kontrol yang lebih baik.`}
                benefits={[
                    "Otomatisasi proses bisnis hingga 80%",
                    "Laporan real-time dan analitik mendalam",
                    "Dukungan teknis prioritas 24/7",
                    "Integrasi mudah dengan sistem yang ada"
                ]}
                image={project.image}
                ctaPrimary={{ text: "Jadwalkan Demo", link: "/appointment" }}
                ctaSecondary={{ text: "Lihat Dokumentasi", action: () => alert("Documentation coming soon!") }}
            />

            {/* 2. Sticky Sub-Nav */}
            <StickyNav sections={sections} />

            {/* 3. Feature Zig-Zag */}
            <div className="py-10">
                <FeatureZigZag features={features} />
            </div>

            {/* 4. Bottom CTA */}
            <section className="py-24 bg-mekari-blue text-center">
                <div className="container-custom">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Siap Trasformasi Bisnis Anda?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan perusahaan yang telah mempercayakan pertumbuhan mereka pada solusi kami.
                    </p>
                    <Link
                        to="/appointment"
                        className="inline-block px-8 py-4 bg-white text-mekari-blue font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-1"
                    >
                        Konsultasi Gratis Sekarang
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
