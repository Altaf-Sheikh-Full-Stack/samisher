import img from '../../../assets/Testimonials/Logo/Component 1.webp'
import img1 from '../../../assets/Testimonials/Logo/Component 2.webp'


import user from '../../../assets/Testimonials/User/troy-rudd-profile-web-1.jpg'

import outcome from '../../../assets/Testimonials/Outcome/component_4.webp'
import outcome1 from '../../../assets/Testimonials/Outcome/component_6.webp'


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
        tital:'Financial-services outbound combining high-volume cold email and calling to reach RIA advisors',
        logo:img,
        thumbnail:outcome1,
        highlight:['2x', '-7'],
        outcome:['Outreach', 'Headcount'],
        userImg:user,
        userName:'W. Troy Rudd',
        testimonials:'Generated 250+ bookings in six months and built a $1,000,000 sales pipeline.',
        role:'Founder and CEO - AECOM'
    },

    {
        tital:'A GTM engine built from zero across cold email, calling, account scoring, and full-market mapping.',
        logo:img1,
        thumbnail:outcome,
        highlight:['$100K', '50+'],
        outcome:['Pipline generated', 'Meeting Booked'],
        userImg:user,
        userName:'W. Troy Rudd',
        testimonials:'Generated 250+ bookings in six months and built a $1,000,000 sales pipeline.',
        role:'Founder and CEO - AECOM'
        
    }
]

export default TestimonialsData