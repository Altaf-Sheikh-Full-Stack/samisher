import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import './Main.css'


const Main = () => {
    return(
        <Section className="Main" size="Fixed">
            <Text>No service added to calcuate please add service first</Text>
            <Button rounded='Bubble'>Add Service</Button>
        </Section>
    )
}

export default Main