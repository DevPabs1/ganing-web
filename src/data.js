
export const projects = [
    {
        id: 1,
        title: 'Ganing Jurnal',
        category: 'Finance',
        location: 'Cloud Accounting',
        image: `${import.meta.env.BASE_URL}assets/3dicons/wallet.png`,
        description: 'Software akuntansi online terintegrasi untuk bisnis Anda. Kelola pembukuan, stok barang, hingga laporan keuangan secara real-time.'
    },
    {
        id: 2,
        title: 'Ganing Talenta',
        category: 'HR & Payroll',
        location: 'HRIS System',
        image: `${import.meta.env.BASE_URL}assets/3dicons/file.png`,
        description: 'Software HRIS dan payroll otomatis. Sederhanakan manajemen kehadiran, cuti, lembur, dan penggajian karyawan.'
    },
    {
        id: 3,
        title: 'Ganing Klikpajak',
        category: 'Tax',
        location: 'Tax Management',
        image: `${import.meta.env.BASE_URL}assets/3dicons/file.png`,
        description: 'Aplikasi pajak online mitra resmi DJP. Hitung, bayar, dan lapor pajak perusahaan lebih mudah dan aman.'
    },
    {
        id: 4,
        title: 'Ganing Qontak',
        category: 'CRM',
        location: 'Omnichannel CRM',
        image: `${import.meta.env.BASE_URL}assets/3dicons/target.png`,
        description: 'Aplikasi CRM omnichannel dan WhatsApp API resmi. Tingkatkan penjualan dan layanan pelanggan dalam satu platform.'
    },
    {
        id: 5,
        title: 'Ganing Sign',
        category: 'Productivity',
        location: 'E-Signature',
        image: `${import.meta.env.BASE_URL}assets/3dicons/rocket.png`,
        description: 'Tanda tangan digital resmi dan tersertifikasi PSrE. Amankan dokumen bisnis Anda secara legal dan efisien.'
    },
    {
        id: 6,
        title: 'Ganing Benefits',
        category: 'HR',
        location: 'Employee Benefits',
        image: `${import.meta.env.BASE_URL}assets/3dicons/wallet.png`,
        description: 'Platform pengelolaan tunjangan karyawan yang fleksibel. Berikan akses ke asuransi, pinjaman, dan benefit lainnya.'
    }
];

export const galleries = [
    {
        id: 'finance-guide',
        title: 'Panduan Lengkap Manajemen Arus Kas 2026',
        category: 'E-Book',
        image: `${import.meta.env.BASE_URL}assets/3dicons/wallet.png`,
        date: '14 Jan 2026'
    },
    {
        id: 'hr-trends',
        title: 'Tren HRIS dan Masa Depan Kerja Remote',
        category: 'Artikel',
        image: `${import.meta.env.BASE_URL}assets/3dicons/boy.png`,
        date: '10 Jan 2026'
    },
    {
        id: 'tax-update',
        title: 'Update Regulasi Pajak PPN & PPh Terbaru',
        category: 'Webinar',
        image: `${import.meta.env.BASE_URL}assets/3dicons/file.png`,
        date: '05 Jan 2026'
    },
    {
        id: 'crm-strategy',
        title: 'Meningkatkan Retensi Pelanggan dengan CRM',
        category: 'Studi Kasus',
        image: `${import.meta.env.BASE_URL}assets/3dicons/target.png`,
        date: '01 Jan 2026'
    },
    {
        id: 'digital-trans',
        title: 'Transformasi Digital untuk UMKM Indonesia',
        category: 'Artikel',
        image: `${import.meta.env.BASE_URL}assets/3dicons/rocket.png`,
        date: '28 Dec 2025'
    },
    {
        id: 'security',
        title: 'Keamanan Data di Era Cloud Computing',
        category: 'Whitepaper',
        image: `${import.meta.env.BASE_URL}assets/3dicons/lock.png`,
        date: '20 Dec 2025'
    }
];

export const galleryDetailContent = {
    'finance-guide': {
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
        tags: ['Finance', 'Accounting', 'Tips']
    },
    'hr-trends': {
        content: '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        tags: ['HR', 'Remote Work', 'Trends']
    },
    'tax-update': {
        content: '<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>',
        tags: ['Tax', 'Regulation', 'Compliance']
    },
    'crm-strategy': {
        content: '<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
        tags: ['CRM', 'Sales', 'Strategy']
    },
    'digital-trans': {
        content: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>',
        tags: ['Digital', 'Transformation', 'SME']
    },
    'security': {
        content: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>',
        tags: ['Security', 'Cloud', 'Data']
    }
};
