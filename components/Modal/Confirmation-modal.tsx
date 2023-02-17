import { Button } from '@mui/material'
import React, { FunctionComponent } from 'react'
import {
  ConfirmationButtons,
  Message,
  YesButton,
  NoButton
} from './Confirmation-modal.style'

interface ConfirmationModalProps {
  onConfirm: () => void
  onCancel: () => void
  message: string
}

export const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (
  props
) => {
  return (
    <React.Fragment>
      <Message>{props.message}</Message>
      <ConfirmationButtons>
        <Button size="small" variant="contained" onClick={props.onConfirm}>
          Yes
        </Button>
        <Button size="small" variant="outlined" onClick={props.onCancel}>
          No
        </Button>
      </ConfirmationButtons>
    </React.Fragment>
  )
}
