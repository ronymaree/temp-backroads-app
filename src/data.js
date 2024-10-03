import Tour1 from './images/tour-1.jpeg'
import Tour2 from './images/tour-2.jpeg'
import Tour3 from './images/tour-3.jpeg'
import Tour4 from './images/tour-4.jpeg'


export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },
]
export const footerLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#featured', text: 'featured' },
]
export const socialLinks = [
    {id: 1, href: '/facebook', icon: 'fab fa-facebook'},
    {id: 2, href: '/twitter', icon: 'fab fa-twitter'},
    {id: 3, href: '/squarespace', icon: 'fab fa-squarespace'},
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',

    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",

    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',

    },

]

export const tours = [

    {
        id: 1,
        img: Tour1,
        date: 'august 26th, 2020',
        title: 'tibet adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quidem aliquid voluptas .',
        location: 'china',
        duration: '6 days',
        cost: 'from $2100',
    },
    {
        id: 2,
        img: Tour2,
        date: 'october 1th, 2020',
        title: 'best of java',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quidem aliquid voluptas .',
        location: 'indonesia',
        duration: '11 days',
        cost: 'from $1400',
    },
    {
        id: 3,
        img: Tour3,
        date: 'september 15th, 2020',
        title: 'explore hong kong',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quidem aliquid voluptas .',
        location: 'hongkong',
        duration: '8 days',
        cost: 'from $5000',
    },
    {
        id: 4,
        img: Tour4,
        date: 'december 5th, 2020',
        title: 'kenya highlightsss',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quidem aliquid voluptas .',
        location: 'kenya',
        duration: '20 days',
        cost: 'from $3300',
    },

]