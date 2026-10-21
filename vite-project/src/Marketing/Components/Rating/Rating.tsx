import Container from "../../../Design/Container/Container"
import Text from "../../../Design/Texts/Text"
import './Rating.css'


import img1 from '../../../assets/People/image 125.webp'
import img2 from '../../../assets/People/image 126.webp'
import img3 from '../../../assets/People/image 127.webp'
import img4 from '../../../assets/People/image 128.webp'

const Rating = () => {
    return (
        <Container className="Rating" color="White" >
            <Container className="Rating-Imgs" color="Transparent" >
                <img src={img1} alt="" height={30} width={30} />
                <img src={img2} alt="" height={30} width={30} />
                <img src={img3} alt="" height={30} width={30} />
                <img src={img4} alt="" height={30} width={30} />
            </Container>
            <Container className="Rating-Info" color="Transparent" >
                <Container className="Rating-Stars" color="Transparent">
                    <Container color="Transparent" className="Rating-star-1" >★</Container>
                    <Container color="Transparent" className="Rating-star-1" >★</Container>
                    <Container color="Transparent" className="Rating-star-1" >★</Container>
                    <Container color="Transparent" className="Rating-star-1" >★</Container>
                    <Container color="Transparent" className="Rating-star-2" >★</Container>
                </Container>
                <Container className="Rating-Info-Text" color="Transparent">
                    <Text weight="500">Loved by 500+ GTM Teams</Text>
                </Container>
            </Container>

        </Container>
    )
}


export default Rating