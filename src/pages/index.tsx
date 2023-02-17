import axios from 'axios'
import Card from '../../components/Card'
import { Button, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import SectionTitle from '../../components/SectionTitle'

const url = 'http://challenge-front-end.bovcontrol.com/v1/checkList'

const Home = ({ data }) => {
  return (
    <>
      {console.log(data)}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <SectionTitle>Checklist</SectionTitle>
        <Button
          title="Add new"
          variant="contained"
          size="small"
          sx={{ color: '#f1f1f1', height: '50%', fontWeight: 'bold' }}
          startIcon={<AddIcon sx={{ color: '#f1f1f1' }} />}
          href="/add-new-farm"
        >
          New
        </Button>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="50px">
        {data.map((article) => (
          <Card
            key={article._id}
            farm_name={article.farmer.name}
            farmer_name={article.from.name}
            farm_city={article.farmer.city}
            create_date={article.created_at}
            id={article._id}
          />
        ))}
      </Box>
    </>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get(url)

  return await { data: response.data }
}

export default Home
