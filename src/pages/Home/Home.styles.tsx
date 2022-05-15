import styled from 'styled-components'

const HomeImg = styled.div`
  img {
    height: auto;
    max-width: 600px;
  }

  @media (max-width: 992px) {
    img {
      width: 100%;
    }
  }
`

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`

const HomeTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`

const HomeTags = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
`

export { HomeContainer, HomeImg, HomeTags, HomeTagsContainer }
