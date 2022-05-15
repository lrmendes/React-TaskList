import { Typography } from '@mui/material'
import Chip from '@mui/material/Chip'
import * as React from 'react'

import { default as logo } from '../../assets/task_list.svg'
import { tags } from '../../constants'
import { HomeContainer, HomeImg, HomeTags, HomeTagsContainer } from './Home.styles'
const Home = () => {
  return (
    <HomeContainer>
      <HomeTagsContainer>
        <Typography variant="h6" component="div" pb={0}>
          Tech Stack
        </Typography>
        <HomeTags>
          {tags.map((tag, index) => (
            <Chip key={tag} color={index % 2 === 0 ? 'primary' : 'info'} label={tag} />
          ))}
        </HomeTags>
      </HomeTagsContainer>
      <HomeImg>
        <img
          src={logo}
          alt="A men and a woman interacting with a task list in the background."
        />
      </HomeImg>
    </HomeContainer>
  )
}

export default Home
