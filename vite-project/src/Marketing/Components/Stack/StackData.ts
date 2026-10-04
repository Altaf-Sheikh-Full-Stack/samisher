
import img1 from '../../../assets/Hero/Component 23.svg'
import img2 from '../../../assets/Hero/Component 24.svg'
import img3 from '../../../assets/Hero/Component 25.svg'
import img4 from '../../../assets/Hero/Component 26.svg'


export interface ServiceItem {
    Name: string
    Img: string
}



export const services: ServiceItem[] = [
    {
        Name: 'Zeno',
        Img: img1
    },
    {
        Name: 'Alto',
        Img: img2
        
    },
    {
        Name: 'Mire',
        Img: img3
       
    },
    {
        Name: 'Ciro',
        Img: img4
    },
]
