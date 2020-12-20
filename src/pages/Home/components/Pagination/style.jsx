import styled from 'styled-components'

export const Pagination = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  justify-content: center;
  padding: 16px 0;
  width: 100%;
`

const PaginationItemDefault = styled.button`
  border-radius: 50%;
  color: black;
  font-size: 12px;
  height: 32px;
  margin-right: 8px;
  width: 32px;
  transition: background-color 0.1s ease-out 0.1s,
    color 0.1s ease-out 0.1s;

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

export const PaginationToward = styled(PaginationItemDefault)`
  &:disabled {
    opacity: 0.38;
  }
`
