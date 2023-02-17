import { Button } from '@mui/material'
import React, { FunctionComponent, useEffect } from 'react'
import ReactDOM from 'react-dom'
import CloseIcon from '@mui/icons-material/Close'

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  Content,
  Backdrop
} from './Modal.style'

export interface ModalProps {
  isShown: boolean
  hide: () => void
  modalContent: JSX.Element
  headerText: string
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <Button size="small" onClick={hide}>
              <CloseIcon sx={{ color: 'black' }} />
            </Button>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}
