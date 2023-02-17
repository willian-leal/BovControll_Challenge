import SectionTitle from '../../../components/SectionTitle'
import {
  Button,
  Box,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AddNewFarm = () => {
  const apiEndPoint = 'http://challenge-front-end.bovcontrol.com/v1/checkList'
  const [state, setState] = useState({})
  const [posts, setPosts] = useState([{}])

  const [amountOfMilkProduces, setAmountOfMilkProduces] = useState(0)
  const [numberOfCowsHead, setNumberOfCowsHead] = useState(0)
  const [farmerName, setFarmerName] = useState('')
  const [farmerCity, setFarmerCity] = useState('')
  const [fromName, setFromName] = useState('')
  const [toName, setToName] = useState('')
  const [locationLatitude, setLocationLatitude] = useState('')
  const [locationLongitude, setLocationLongitude] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [supervisionThisMonth, setSupervisionThisMonth] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      [event.target.name]: event.target.checked
    })
  }

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint)
      setPosts(res)
      console.log(res)
    }
    getPosts()
  }, [])

  const handleSubmitAddFarmer = async (event) => {
    event.preventDefault()
    const id = posts[posts.length - 1]['_id'] + 1
    const dataReq = {
      checklists: [
        {
          _id: id.toString(),
          type: Object.keys(state)[0],
          amount_of_milk_produced: amountOfMilkProduces,
          number_of_cows_head: numberOfCowsHead,
          had_supervision: supervisionThisMonth,
          farmer: {
            name: farmerName,
            city: farmerCity
          },
          from: {
            name: fromName
          },
          to: {
            name: toName
          },
          location: {
            latitude: parseFloat(locationLatitude),
            longitude: parseFloat(locationLongitude)
          },
          created_at: createdAt,
          updated_at: createdAt
        }
      ]
    }

    const req = await axios.post(apiEndPoint, dataReq)
    if (req.status == 201) {
      window.location.href = '/'
    } else {
      alert('Não foi possível criar uma fazenda')
    }
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <SectionTitle>Add New Farm</SectionTitle>
        <Button
          title="Back"
          variant="contained"
          size="small"
          sx={{ color: '#f1f1f1', height: '50%', fontWeight: 'bold' }}
          href="/"
        >
          Back
        </Button>
      </Box>
      <Box
        onSubmit={handleSubmitAddFarmer}
        component="form"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          gap: '20px',
          height: '70vh'
        }}
      >
        <TextField
          required
          label="Farm Name"
          placeholder="Farm Name"
          onChange={(e) => setFromName(e.target.value)}
          type="text"
          name="name"
        />
        <TextField
          required
          label="Farmer name"
          onChange={(e) => setFarmerName(e.target.value)}
          placeholder="Farmer name"
          type="text"
          name="farm_name"
        />
        <TextField
          required
          label="City"
          placeholder="City"
          type="text"
          name="city"
          onChange={(e) => setFarmerCity(e.target.value)}
        />
        <TextField
          required
          label="Creation date"
          type="datetime-local"
          name="creation_date"
          onChange={(e) => setCreatedAt(e.target.value)}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          required
          label="Latitude"
          onChange={(e) => setLocationLatitude(e.target.value)}
          placeholder="Latitude"
          type="text"
          name="latitude"
        />
        <TextField
          required
          label="Longitude"
          placeholder="Longitude"
          onChange={(e) => setLocationLongitude(e.target.value)}
          type="text"
          name="longitude"
        />
        <TextField
          required
          label="Leite (L)"
          placeholder="Leite (L)"
          type="number"
          name="milk"
          onChange={(e) => setAmountOfMilkProduces(parseInt(e.target.value))}
        />
        <TextField
          required
          label="Cabeças de gado"
          onChange={(e) => setNumberOfCowsHead(parseInt(e.target.value))}
          placeholder="Cabeças de gado"
          type="number"
          name="gado"
        />
        <TextField
          required
          label="Supervisor name"
          onChange={(e) => setToName(e.target.value)}
          placeholder="Supervisor name"
          type="text"
          name="supervisor"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Type</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox size="small" onChange={handleChange} name="BPA" />
                }
                label="BPA"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    name="Antibiotic"
                    size="small"
                  />
                }
                label="Antibiotic"
              />
              <FormControlLabel
                control={
                  <Checkbox size="small" onChange={handleChange} name="BPF" />
                }
                label="BPF"
              />
            </FormGroup>
          </FormControl>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Supervised this month?</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    onChange={(e) => {
                      setSupervisionThisMonth(e.target.checked ? true : false)
                    }}
                    name="Yes"
                  />
                }
                label="Yes"
              />
            </FormGroup>
          </FormControl>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button
            title="send"
            variant="contained"
            size="medium"
            sx={{
              color: '#f1f1f1',
              fontWeight: 'bold'
            }}
            type="submit"
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default AddNewFarm
