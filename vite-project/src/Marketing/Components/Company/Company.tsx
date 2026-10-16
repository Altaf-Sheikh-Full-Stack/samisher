import Section from "../../../Design/Container/Section/Section";
import Text from "../../../Design/Texts/Text";
import CompanyData from "./CompanyData";
import Box from "../../../Design/Container/Box/Box";
import "./Company.css";
import Container from "../../../Design/Container/Container";
import Image from "../../../Design/Img/Img";
import PeopleImage from "./People";


const Company = () => {
    return (
        <Container className="Company">
            <div className="Company-Intro">
                <Container className="Company-Intro-Image">
                    {PeopleImage.map((img) => (
                        <img src={img} />
                    ))}

                </Container>
                <Container>
                    <Text textType="H5" color="Black">Rated 5/5 ⭐️⭐️⭐️⭐️</Text>
                    <Text textType="Text"  >Trusted by 500+ Partners </Text>
                </Container>

            </div>
            <Box className="Company-Img">
                {CompanyData.map((value) => (
                    <article key={value.Data} className="Company-Info">
                        <img src={value.Img} alt="" loading="lazy" decoding="async" />
                        <div className="Company-Quote">
                            <p>“{value.Data}”</p>
                            <strong>{value.Name}</strong>
                            <small>{value.Company}</small>
                        </div>
                    </article>
                ))}
            </Box>
        </Container>
    );
};

export default Company;
