import Button from "../../../Design/Button/Button"
import Container from "../../../Design/Container/Container"
import './HoverCTA.css'


const HoverCTA = () => {
    return(
        <Container className="HoverCTA" color="Transparent">
            <Button rounded="Flat">Book Meeting</Button>
            <Button rounded="Flat" variant="Secondary">Chat</Button>
        </Container>
    )
}

export default HoverCTA