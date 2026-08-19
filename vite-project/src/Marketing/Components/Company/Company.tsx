import Section from "../../../System/Layouts/Section/Section";
import Text from "../../../System/Texts/Text";
import CompanyData from "./CompanyData";
import Box from "../../../System/Layouts/Box/Box";
import "./Company.css";

const Company = () => {
    return (
        <Section className="Company">
            <div className="Company-Intro">
                {/* <span>CLIENT RESULTS</span> */}
                <Text textType="H2" color="Dark">Built to create conversations that move revenue.</Text>
                <Text textType="Text"  >Trusted by ambitious B2B teams that need more than a list—they need the right meetings on the calendar.</Text>
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
        </Section>
    );
};

export default Company;
