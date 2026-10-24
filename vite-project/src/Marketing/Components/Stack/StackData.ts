
import img1 from '../../../assets/Hero/Bot/Component 23.svg'
import img2 from '../../../assets/Hero/Bot/Component 24.svg'
import img3 from '../../../assets/Hero/Bot/Component 25.svg'
import img4 from '../../../assets/Hero/Bot/Component 26.svg'


export interface ServiceItem {
    name: string
    icon: string
}



export const services: ServiceItem[] = [
    {
        name: 'Zeno',
        icon: img1
    },
    {
        name: 'Alto',
        icon: img2
        
    },
    {
        name: 'Mire',
        icon: img3
       
    },
    {
        name: 'Ciro',
        icon: img4
    },
]
