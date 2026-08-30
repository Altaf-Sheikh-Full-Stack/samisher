import Button from "../../../../System/Button/Button"
import Box from "../../../../System/Layouts/Box/Box"
import Section from "../../../../System/Layouts/Section/Section"
import Text from "../../../../System/Texts/Text"
import './Collection.css'
// NOTE: placeholder visual — replace with a dedicated Collection asset when available.
import img1 from '../../../../assets/Funnel/ChatGPT Image Aug 12, 2026, 08_09_01 PM.png'

const Collection = () => {
    return (
        <Section className="Collection" variant="Primary" rounded="Bubble">
            <Box className="Collection-Info" variant="Transparent">
                <Text textType="H2" color="Lite">Turn outstanding invoices into collected revenue</Text>
                <Box variant="Transparent" className="Collection-Info-Point">
                    <Text textType="H4" color="Lite">• Payment follow-up</Text>
                    <Text textType="H4" color="Lite">• Invoice collection</Text>
                    <Text textType="H4" color="Lite">• Overdue recovery</Text>
                    <Text textType="H4" color="Lite">• Recurring payment collection</Text>
                </Box>
                <Button variant="Secondary" rounded="Bubble">
                    <a style={{ color: '#ffffff', textDecoration: 'none' }} href="https://cal.com/samisher/meeting" target="_blank" rel="noopener noreferrer">Book demo</a>
                </Button>
            </Box>
            <Box className="Collection-Img">
                <img src={img1} alt="" loading="lazy" decoding="async" />
            </Box>
        </Section>
    )
}


export default Collection