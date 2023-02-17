import FarmPage from '../app/FarmPage'
import axios from 'axios'

const Farm = ({ data }) => {
  console.log(data)
  return (
    <>
      <FarmPage
        lat={data.location.latitude}
        lon={data.location.longitude}
        farm_name={data.from.name}
        farmer_name={data.farmer.name}
        city={data.farmer.city}
        creation_date={data.created_at}
        milk={data.amount_of_milk_produced}
        cow={data.number_of_cows_head}
        supervisor={data.to.name}
        status={data.had_supervision}
      />
    </>
  )
}

Farm.getInitialProps = async (context) => {
  const id = context.query.id

  console.log(id)
  const response = await axios.get(
    `http://challenge-front-end.bovcontrol.com/v1/checkList/${id}`
  )

  return await { data: response.data }
}

export default Farm
