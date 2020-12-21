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
  align-content: flex-start;
  display: flex;
  flex-flow: row wrap;
  padding: 32px 16px;
  width: 100%;
`

export const EmptyResult = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  font-style: italic;
  font-weight: medium;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`
