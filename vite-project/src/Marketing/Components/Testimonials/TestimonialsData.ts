import img from '../../../assets/Testimonials/Component 1.webp'
import img1 from '../../../assets/Testimonials/Component 2.webp'


interface TestimonialsProps {
    tital:string
    logo:string
    highlight:[string, string]
    outcome:[string, string]
}

const TestimonialsData: TestimonialsProps[] = [
    
    {
        tital:'Financial-services outbound combining high-volume cold email and calling to reach RIA advisors ',
        logo:img,
        highlight:['$100k', '500+'],
        outcome:['Reveneu genrated', 'Meeting booked']
    },

    {
        tital:'A GTM engine built from zero across cold email, calling, account scoring, and full-market mapping.',
        logo:img1,
        highlight:['12x', '-5'],
        outcome:['Outreach', 'Headcount']
    }
]

export default TestimonialsData