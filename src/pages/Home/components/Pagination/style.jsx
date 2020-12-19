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

export const PaginationItem = styled.button.attrs(({ active }) => {
  if (active) {
    return {
      style: {
        backgroundColor: '#fe4066',
        color: 'white',
      },
    }
  }
})`
  border-radius: 50%;
  color: black;
  font-size: 12px;
  height: 32px;
  margin-right: 8px;
  width: 32px;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: #f2e9e4;
  }
`
