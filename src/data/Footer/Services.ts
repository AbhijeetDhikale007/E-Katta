type Type = {
    Title: string,
    name1: string,
    name2: string,
    name3?: string,
    name4?: string,
    name5?: string,
    name6?: string,
    name7?: string,
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
    { Title: 'Our Services', name1: 'Domicile Certificate', name2: 'Non Creamy Layer', name3: 'Police Verification', name4: 'Vehicle Insurence', url1: '/Services', url2: '/Services', url3: '/Services' }
]