import styled from 'styled-components'

export const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 auto;
  justify-content: center;
  max-width: 1200px;
  padding: 16px 32px;
`

export const Pagination = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 auto;
  justify-content: flex-start;
  max-width: 100%;
`

const PaginationItemDefault = styled.button`
  border-radius: 50%;
  color: black;
  font-size: 12px;
  height: 32px;
  margin-right: 8px;
  transition: background-color 0.1s ease-out 0.1s,
    color 0.1s ease-out 0.1s;
  width: 32px;

  &:hover:enabled {
    background-color: #f2e9e4;
  }
`

export const PaginationNumber = styled(PaginationItemDefault)`
  &:disabled {
    background-color: #fe4066;
    color: white;
  }
`
