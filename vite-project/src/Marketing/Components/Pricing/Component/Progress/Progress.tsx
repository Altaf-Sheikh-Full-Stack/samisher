import Box from "../../../../../System/Layouts/Box/Box"
import Section from "../../../../../System/Layouts/Section/Section";
import Text from "../../../../../System/Texts/Text";
import './Progress.css'


type Props = {current: number; total: number};

const Progress = ({current, total}: Props) => {
    const percent = ((current + 1) / total) * 100;
    return(
        <Section className="Progress">
            <Box className="Progress-Info">
                <Text>Qustion {current+ 1} of {total} {Math.round(percent)}</Text>
            </Box>
            <Box className="Progress-bar">
                <div className="progress-value" style={{ width: `${percent}%` }}></div>
            </Box>
        </Section>
    )
}

export default Progress