import React from 'react';
import { Link } from 'react-router-dom';
import QRCodeDisplay from './QRCodeDisplay';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link to="/" className="text-3xl font-extrabold tracking-tight text-white block">
                            GANING
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
                            Platform otomasi bisnis #1 di Indonesia. Kelola seluruh operasional perusahaan dari HR, Akuntansi, Pajak, hingga CRM dalam satu ekosistem terintegrasi.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {/* Social Icons Placeholders */}
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">IG</div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">LN</div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">YT</div>
                        </div>
                    </div>

                    {/* Products Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Produk</h4>
                        <ul className="space-y-4 text-[13px] font-medium text-gray-400">
                            <li><Link to="/products/finance" className="hover:text-white transition-colors block py-0.5">Finance & Accounting</Link></li>
                            <li><Link to="/products/hr" className="hover:text-white transition-colors block py-0.5">HR & Payroll</Link></li>
                            <li><Link to="/products/tax" className="hover:text-white transition-colors block py-0.5">Tax Compliance</Link></li>
                            <li><Link to="/products/crm" className="hover:text-white transition-colors block py-0.5">CRM & Sales</Link></li>
                            <li><Link to="/products/benefits" className="hover:text-white transition-colors block py-0.5">Employee Benefits</Link></li>
                        </ul>
                    </div>

                    {/* Company Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">Perusahaan</h4>
                        <ul className="space-y-4 text-[13px] font-medium text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition-colors block py-0.5">Tentang Kami</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors flex items-center gap-2 py-0.5">Karir <span className="text-[10px] bg-white text-black font-bold px-1.5 py-0.5 rounded">Hiring</span></Link></li>
                            <li><Link to="/press" className="hover:text-white transition-colors block py-0.5">Press Kit</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors block py-0.5">Hubungi Kami</Link></li>
                        </ul>
                    </div>

                    {/* Support Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">Dukungan</h4>
                        <ul className="space-y-4 text-[13px] font-medium text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 py-0.5">
                                <img src={`${import.meta.env.BASE_URL}assets/3dicons/chat.png`} alt="" className="w-5 h-5 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                Pusat Bantuan
                            </a></li>
                            <li><a href="#" className="hover:text-white transition-colors block py-0.5">Dokumentasi API</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block py-0.5">Status Server</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block py-0.5">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} Ganing Group. All rights reserved. (Official)</p>
                        <span className="hidden md:block">|</span>
                        <a href="#" className="hover:text-gray-300">Kebijakan Privasi</a>
                        <span className="hidden md:block">|</span>
                        <a href="#" className="hover:text-gray-300">Syarat & Ketentuan</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 font-bold">Mobile App:</span>
                        <QRCodeDisplay size={80} url="https://DevPabs1.github.io/ganing-web" />
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
