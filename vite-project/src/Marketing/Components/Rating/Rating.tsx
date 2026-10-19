import Container from "../../../Design/Container/Container"
import Text from "../../../Design/Texts/Text"
import './Rating.css'


const Rating = () => {
    return (
        <Container className="Rating" color="Transparent">
            <Container className="Rating-Trust">
                <Container color="Transparent" className="Rating-Trust-Stars">
                    <Container className="Rating-Trust-1">★</Container>
                    <Container className="Rating-Trust-1">★</Container>
                    <Container className="Rating-Trust-1">★</Container>
                    <Container className="Rating-Trust-1">★</Container>
                    <Container className="Rating-Trust-2">★</Container>
                </Container>
                <Text weight="800" color="White">4.0</Text>
                <Text weight="400" color="Lite">Trustpoilet</Text>
            </Container>
            <Container className="Rating-Trust">
                <Container color="Transparent" className="Rating-Trust-Stars">
                    <Container className="Rating-G2-1">★</Container>
                    <Container className="Rating-G2-1">★</Container>
                    <Container className="Rating-G2-1">★</Container>
                    <Container className="Rating-G2-1">★</Container>
                    <Container className="Rating-G2-2">★</Container>
                </Container>
                <Text weight="800" color="White">4.6</Text>
                <Text weight="400" color="Lite">G2</Text>
            </Container>
        </Container>
    )
}


export default Rating