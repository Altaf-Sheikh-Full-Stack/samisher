
import Section from '../../../System/Layouts/Section/Section'
import Box from '../../../System/Layouts/Box/Box'
import Text from '../../../System/Texts/Text'
import './Statistics.css'
import StatisticsData from './StatisticsData'
const Statistics = () => {


  return (
    <Section className='Statistics' variant='Transparent'>
      <Box className='Statistics-Header'>
        <div className='Statistics-Badge'>🏆</div>
        <Text textType='Heading'  color='Brand'>
          Proven Results for Sales Teams
        </Text>
        <Text textType='SubHeading' color='Dark' className='Statistics-Subtitle'>
          Thousands of companies generate revenue through qualified meetings.
        </Text>
      </Box>

      <Box  className='Statistics-Grid'>
        {StatisticsData.map((stat, index) => (
          <Box key={index} className='Statistics-Card' variant='Transparent'>
            <Text textType='Heading' color='Brand'>{stat.number}</Text>
            <Text textType='SubHeading' color='Dark'>{stat.label}</Text>
            <Text color='Dark' className='Statistics-Description'>{stat.description}</Text>
          </Box>
        ))}
      </Box>
    </Section>
  )
}

export default Statistics