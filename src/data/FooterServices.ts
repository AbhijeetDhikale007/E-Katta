type Type = {
    Title: string,
    Icon1?: string,
    name1: string,
    Icon2?: string,
    name2: string,
    Icon3?: string,
    name3?: string,
    Icon4?: string,
    name4?: string,
    Icon5?: string,
    name5?: string,
    Icon6?: string,
    name6?: string,
    url1: string,
    url2: string,
    url3?: string,
    url4?: string,
    url5?: string,
    url6?: string
}[]

export let Services: Type = [
    { Title: 'Useful Links', name1: 'Home', name2: 'About Us', name3: 'Contact Us', url1: '/', url2: '/Aboutus', url3: '/Contactus' },
    { Title: 'Our Services', name1: 'Income Certificate', name2: 'Caste Certificate', name3: 'Pan Card', name4: 'PF (Pension)', url1: '/Services', url2: '/Services', url3: '/Services' },
    { Title: 'Our Services', name1: 'Domicile Certificate', name2: 'Non Creamy Layer', name3: 'Police Verification', name4: 'Vehicle Insurence', url1: '/Services', url2: '/Services', url3: '/Services' },
    { Title: 'Get In Touch', Icon1: 'Phone', name1: '+91 70402 18626', Icon2: 'WhatsApp', name2: '+91 70402 18626', Icon3: 'Mail', name3: 'ekatta.online@gmail.com', Icon4: 'TelegramW', name4: '+91 70402 18626', url1: 'tel:+917040218626', url2: 'https://wa.me/+917040218626', url3: 'mailto:ekatta.online@gmail.com', url4: 'https://t.me/labhadesanket' }
]