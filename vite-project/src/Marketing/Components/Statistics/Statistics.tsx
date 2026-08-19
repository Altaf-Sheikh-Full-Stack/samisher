
import Section from '../../../System/Layouts/Section/Section'
import Box from '../../../System/Layouts/Box/Box'
import Text from '../../../System/Texts/Text'
import './Statistics.css'
import StatisticsData from './StatisticsData'
const Statistics = () => {


  return (
    <Section className='Statistics' variant='Transparent'>
      <Box className='Statistics-Header'>
        {/* <span>THE NUMBERS THAT MATTER</span> */}
        <Text textType='H2'>A model designed around measurable outcomes.</Text>
        <Text textType='H3' color='Dark' className='Statistics-Subtitle'>Every campaign is built to generate qualified conversations, not vanity metrics.</Text>
      </Box>

      <Box  className='Statistics-Grid'>
        {StatisticsData.map((stat, index) => (
          <Box key={index} className='Statistics-Card' variant='Transparent'>
            <Text textType='H2' color='Brand'>{stat.number}</Text>
            <Text textType='H3' color='Dark'>{stat.label}</Text>
            <Text color='Dark' className='Statistics-Description'>{stat.description}</Text>
          </Box>
        ))}
      </Box>
    </Section>
  )
}

export default Statistics
