import Container from "../../../Design/Container/Container"
import Text from "../../../Design/Texts/Text"
import './Banner.css'




const Banner = () => {
    return(
        <Container className="Banner" color="White">
          <Text textType="Text"  color="Dark" >Kick Off Your Campaign with $250<span> <a style={{color:'black'}} href="https://cal.com/samisher/meeting">Learn More</a></span></Text>  
        </Container>
    )
}


export default Banner
