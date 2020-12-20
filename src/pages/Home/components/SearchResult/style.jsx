import styled from 'styled-components'

export const SearchResultItem = styled.a`
  width: 100%;
  margin-bottom: 16px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > img {
    width: 100%;
  }

  & > h3 {
    font-size: 14px;
    font-weight: medium;
    line-height: 20px;
    padding: 8px;
  }

  @media (min-width: 576px) {
    margin-right: 16px;
    width: calc((100% - 16px) / 2);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    width: calc((100% - 16px * 2) / 3);

    &:nth-child(2n) {
      margin-right: 16px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 992px) {
    width: calc((100% - 16px * 3) / 4);

    &:nth-child(3n) {
      margin-right: 16px;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`

export const SearchResult = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
`
