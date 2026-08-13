import Box from "../../../../../System/Layouts/Box/Box"
import Text from "../../../../../System/Texts/Text";



type Props = {current: number; total: number};

const Progress = ({current, total}: Props) => {
    const percent = ((current + 1) / total) * 100;
    return(
        <Box className="Progresss">
            <Box className="Progress-Info">
                <Text>Qustion {current+ 1} of {total} {Math.round(percent)}</Text>
            </Box>
            <Box className="Progress-bar">
                <div className="progress-value" style={{ width: `${percent}%` }}></div>
            </Box>
        </Box>
    )
}

export default Progress