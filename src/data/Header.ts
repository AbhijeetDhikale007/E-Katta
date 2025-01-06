type Type1 = [
    { Numb: string, NumbLink: string, WhatsAppNum: string, WhatsAppLink: string, Email: string, EmailLink: string, Lang1: string, Lang2: string, Lang3?: string, Lang4?: string }
]

type Type2 = [
    { Logo: string, Title: string, Logo1?: string, Logo2?: string, Logo3?: string, Button1?: string, Button1Link?: string, Button2?: string,  Button2Link?: string, Button3?: string, Button3Link?: string, Button4?: string, Button4Link?: string }
]

export let Header1: Type1 = [
    { Numb: '+91 70402 18626', NumbLink: 'tel:+917040218626', WhatsAppNum: '+91 70402 18626', WhatsAppLink: 'https://wa.me/+917040218626', Email: 'ekatta.online@gmail.com', EmailLink: 'emailto:ekatta.online@gmail.com', Lang1: 'English', Lang2: 'मराठी' }
]

export let Header2Eng: Type2 = [
    { Logo: 'Ekatta.jpg', Title: 'E-Katta', Logo1: 'Digital-India.png', Logo2: 'My-Gov.png', Button1: 'Home', Button1Link: '/', Button2: 'Services',  Button2Link: '/Services', Button3: 'About Us', Button3Link: '/Aboutus', Button4: 'Contact Us', Button4Link: '/Contactus' }
]

export let Header2Mar: Type2 = [
    { Logo: 'Ekatta.jpg', Title: 'ई-कट्टा', Logo1: 'Digital-India.png', Logo2: 'My-Gov.png', Button1: 'होम', Button1Link: '/', Button2: 'सर्विसेस',  Button2Link: '/Services', Button3: 'आमच्या बद्दल', Button3Link: '/Aboutus', Button4: 'आमचा संपर्क', Button4Link: '/Contactus' }
]