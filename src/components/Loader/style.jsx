import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.img`
  animation: ${rotate} 1s linear 0s infinite;
  height: 48px;
  left: 50%;
  margin-left: -24px;
  margin-top: -24px;
  position: absolute;
  top: 50%;
  width: 48px;
`
