import Container from "../../../Design/Container/Container"
import Text from "../../../Design/Texts/Text"
import './Banner.css'




const Banner = () => {
    return(
        <Container className="Banner" color="Primary">
          <Text textType="Text"  color="White" >Kick Off Your Campaign with $250<span> <a href="https://cal.com/samisher/meeting">Learn More</a></span></Text>  
        </Container>
    )
}


export default Banner
