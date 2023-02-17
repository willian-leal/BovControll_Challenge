import * as S from './Card.styles'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Modal } from '../Modal/Modal'
import { ConfirmationModal } from '../Modal/Confirmation-modal'
import { useModal } from '../Modal/UseModal'
import axios from 'axios'
import Link from 'next/link'

const Card = ({ farm_name, farmer_name, farm_city, create_date, id }) => {
  const { isShown, toggle } = useModal()
  const onConfirm = async () => {
    const apiEndPoint = `http://challenge-front-end.bovcontrol.com/v1/checkList/${id}`
    console.log(apiEndPoint)
    const req = await axios.delete(apiEndPoint)
    if (req.status == 200) {
      window.location.reload()
    } else {
      alert('Não foi possível excluir a fazenda.')
    }
  }
  const onCancel = () => toggle()

  return (
    <S.CardContainer>
      <S.CartTitle>{farm_name}</S.CartTitle>
      <S.Content>{farmer_name}</S.Content>
      <S.Content>{farm_city}</S.Content>
      <S.Content>{create_date}</S.Content>
      <S.Icons>
        <S.IconButton title="Delete" onClick={toggle}>
          <DeleteIcon sx={{ color: '#4d85b8' }} />
        </S.IconButton>
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText="Confirmation"
          modalContent={
            <ConfirmationModal
              onConfirm={onConfirm}
              onCancel={onCancel}
              message="Are you sure you want to delete the farm?"
            />
          }
        />
        <S.IconButton title="Edit">
          <CreateIcon sx={{ color: '#4d85b8' }} />
        </S.IconButton>
        <Link href={{ pathname: '/farm', query: { id: id } }}>
          <VisibilityIcon sx={{ color: '#4d85b8' }} />
        </Link>
      </S.Icons>
    </S.CardContainer>
  )
}

export default Card
