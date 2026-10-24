import Container from "../../../Design/Container/Container"
import Image from "../../../Design/Img/Img"
import Text from "../../../Design/Texts/Text"
import './Testimonials.css'
import TestimonialsData from "./TestimonialsData"


const Testimonials = () => {
    return (
        <Container className="Testimonials" >
            {TestimonialsData.map((data) => (
                <Container className="Testimonials-Card">
                    <Container className="Testimonials-Card-1" >
                        <Text textType="H3" font="Onest">{data.tital}</Text>
                        <Container className="Testimonials-Card-1-Card">
                            <Container className="Testimonials-Card-1-Card-1">
                                <Text textType="H2" font="Onest" weight="800" color="Black">{data.highlight[0]}</Text>
                                <Text>{data.outcome[0]}</Text>
                            </Container>
                            <Container >
                                <Text textType="H2" font="Onest" weight="800" color="Black">{data.highlight[1]}</Text>
                                <Text>{data.outcome[1]}</Text>
                            </Container>
                        </Container>
                    </Container>
                    <Container className="Testimonials-Card-2">
                        <Image highRes={data.logo} lowRes={data.logo} />
                    </Container>
                    <Container className="Testimonials-Card-3" >
                        <Container color="Secondary" className="Testimonials-Card-3-Testimonial" >
                            <Text color="Dark" >"{data.testimonials}"</Text>
                        </Container>
                        <Container className="Testimonials-Card-3-UserInfo">
                            <Image  highRes={data.userImg} lowRes={data.userImg} height={40} width={40} />
                            <Container className="Testimonials-Card-3-UserInfo-Name">
                                <Text textType="H6" color="Black">{data.userName}</Text>
                                <Text>{data.role}</Text>
                            </Container>

                        </Container>
                    </Container>
                    <Container className="Testimonials-Card-4" >
                        <Image  highRes={data.thumbnail} lowRes={data.thumbnail}/>
                    </Container>
                </Container>
            ))}

        </Container>
    )
}

export default Testimonials