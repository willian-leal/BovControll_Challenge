import styled from 'styled-components'

export const ConfirmationButtons = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  gap: 20px;
`

export const Message = styled.div`
  color: black;
  margin-bottom: 30px;
  text-align: center;
`

export const YesButton = styled.button`
  color: white;
  border-radius: 2px;
  border: 0px solid black;
  width: 6rem;
  background-color: #10b810;
  :hover {
    background-color: green;
  }
`

export const NoButton = styled.button`
  color: black;
  border-radius: 2px;
  border: 0px solid black;
  width: 6rem;
  background-color: lightgrey;
  :hover {
    background-color: #c8c8c8;
  }
`
