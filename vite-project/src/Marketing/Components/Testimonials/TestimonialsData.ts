import img from '../../../assets/Testimonials/Logo/Component 1.webp'
import img1 from '../../../assets/Testimonials/Logo/Component 2.webp'


import user from '../../../assets/Testimonials/User/troy-rudd-profile-web-1.jpg'


interface TestimonialsProps {
    tital:string
    logo:string
    highlight:[string, string]
    outcome:[string, string]
    thumbnail:string
    userImg:string
    role:string
    userName:string
    testimonials:string
}

const TestimonialsData: TestimonialsProps[] = [
    
    {
        tital:'Financial-services outbound combining high-volume cold email and calling to reach RIA advisors ',
        logo:img,
        thumbnail:'img',
        highlight:['$100k', '500+'],
        outcome:['Reveneu genrated', 'Meeting booked'],
        userImg:user,
        userName:'W. Troy Rudd',
        testimonials:'Generated 250+ bookings in six months and built a $1,000,000 sales pipeline.',
        role:'Founder and CEO - AECOM'
    },

    {
        tital:'A GTM engine built from zero across cold email, calling, account scoring, and full-market mapping.',
        logo:img1,
        thumbnail:'img',
        highlight:['12x', '-5'],
        outcome:['Outreach', 'Headcount'],
        userImg:'as',
        userName:'Altaf',
        testimonials:'this weed is good',
        role:'Fuckyou of samisher'
        
    }
]

export default TestimonialsData