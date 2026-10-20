import Button from "../../../Design/Button/Button"
import Container from "../../../Design/Container/Container"
import Input from "../../../Design/Inputs/Input"
import './Chatgpt.css'

const Chatbot = () => {
    return (
        <Container className="ChatBot">
            <Container></Container>
            <textarea name="" id=""></textarea>
            <Container>
                <Button variant="Primary">RUN</Button>
            </Container>
        </Container>
    )
}

export default Chatbot