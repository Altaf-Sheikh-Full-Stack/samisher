import Section from "../../../System/Layouts/Section/Section"
import Text from "../../../System/Texts/Text"
import './Banner.css'




const Banner = () => {
    return(
        <Section className="Banner" size="Fluid" variant="Primary">
          <Text textType="Text"  color="White" >Integrate seamlessly with your existing pipeline.<span> <a href="https://cal.com/samisher/meeting">Learn More</a></span></Text>  
        </Section>
    )
}


export default Banner
