import React from 'react';
import { Link } from 'react-router-dom';
import QRCodeDisplay from './QRCodeDisplay';

const Footer = () => {
    return (
        <footer className="bg-mekari-dark text-white pt-20 pb-10 border-t border-gray-800">
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
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mekari-blue transition-colors cursor-pointer">IG</div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mekari-blue transition-colors cursor-pointer">LN</div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-mekari-blue transition-colors cursor-pointer">YT</div>
                        </div>
                    </div>

                    {/* Products Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Produk</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-300">
                            <li><Link to="/products/finance" className="hover:text-white transition-colors">Finance & Accounting</Link></li>
                            <li><Link to="/products/hr" className="hover:text-white transition-colors">HR & Payroll</Link></li>
                            <li><Link to="/products/tax" className="hover:text-white transition-colors">Tax Compliance</Link></li>
                            <li><Link to="/products/crm" className="hover:text-white transition-colors">CRM & Sales</Link></li>
                            <li><Link to="/products/benefits" className="hover:text-white transition-colors">Employee Benefits</Link></li>
                        </ul>
                    </div>

                    {/* Company Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Perusahaan</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-300">
                            <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Karir <span className="text-xs bg-mekari-blue px-2 py-0.5 rounded ml-2">Hiring</span></Link></li>
                            <li><Link to="/press" className="hover:text-white transition-colors">Press Kit</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
                        </ul>
                    </div>



                    {/* Support Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Dukungan</h4>
                        <ul className="space-y-4 text-sm font-medium text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                <img src={`${import.meta.env.BASE_URL}assets/3dicons/chat.png`} alt="" className="w-5 h-5" />
                                Pusat Bantuan
                            </a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Dokumentasi API</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Status Server</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} Ganing Group. All rights reserved.</p>
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
