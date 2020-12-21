import styled from 'styled-components'

import SearchIcon from '@assets/images/icon__search_white.svg'

export const SearchBarContainer = styled.header`
  align-items: center;
  background-color: #fe4066;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  height: 56px;
  justify-content: center;
  padding: 8px 16px;
  width: 100%;
`

export const SearchBar = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.54);
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  max-width: 576px;
  width: 100%;
`

export const SearchBarInput = styled.input`
  background-color: transparent;
  color: #ffffff;
  flex: 1 1 0;
  font-size: 14px;
  font-weight: normal;
  height: 100%;
  padding: 0 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.38);
  }
`

export const SearchBarButton = styled.button`
  background-image: url(${SearchIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  flex: 0 0 auto;
  height: 32px;
  width: 32px;

  &:disabled {
    opacity: 0.54;
  }
`
