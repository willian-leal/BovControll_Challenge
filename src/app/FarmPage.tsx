import { Box } from '@mui/material'
import SectionTitle from '../../components/SectionTitle'
import MapChart from '../../components/Map/MapChart'
import TextTypography from '../../components/Typography/Typography'

const FarmPage = ({
  lat,
  lon,
  farm_name,
  farmer_name,
  creation_date,
  milk,
  city,
  cow,
  supervisor,
  status
}) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#f1f1f1',
          height: '50vh',
          marginBottom: '20px',
          overflow: 'auto'
        }}
      >
        <MapChart lat={lat} long={lon} city={city} />
      </Box>
      <SectionTitle>Farm name: {farm_name}</SectionTitle>
      <TextTypography>Farmer name: {farmer_name}</TextTypography>
      <TextTypography>City: {city}</TextTypography>
      <TextTypography>Creation data: {creation_date}</TextTypography>
      <TextTypography>Liters of milk: {milk}L</TextTypography>
      <TextTypography>Head of cattle: {cow}</TextTypography>
      <TextTypography>Supervisor: {supervisor}</TextTypography>
      <TextTypography>Had supervision: {status}</TextTypography>
    </>
  )
}

export default FarmPage
