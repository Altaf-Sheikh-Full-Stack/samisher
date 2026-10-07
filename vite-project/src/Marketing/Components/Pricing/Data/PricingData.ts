import img1 from '../../../../assets/Hero/Component 23.svg'
import img2 from '../../../../assets/Hero/Component 24.svg'
import img3 from '../../../../assets/Hero/Component 25.svg'
import img4 from '../../../../assets/Hero/Component 26.svg'


interface Pricing {
    icons: string
    name: string
    price: string
    summery: string
    item: string[]
    bcolor:string
    color:string
}




const pricingData: Pricing[] = [
    {
        icons: img4,
        name: 'Zeno',
        price: '15',
        summery: 'Choose this if you want end to end prospect finder ',
        item: [
            'Item1', 'Item 2'
        ],
        bcolor:'#0B3CFF',
        color:'white'
        
    },
    {
        icons: img3,
        name: 'Alto',
        price: '15',
        summery: 'hello world',
        item: [
            'Item1', 'Item 2'
        ],
        bcolor:'#FE05EE',
        color:'white'
    },
    {
        icons: img2,
        name: 'Mire',
        price: '15',
        summery: 'hello world',
        item: [
            'Item1', 'Item 2'
        ],
        bcolor:'#D0FE04',
        color:'black'
    },
    {
        icons: img1,
        name: 'Ciro',
        price: '15',
        summery: 'hello world',
        item: [
            'Item1', 'Item 2'
        ],
        bcolor:'#05FF0E',
        color:'black'
    }
]

export default pricingData