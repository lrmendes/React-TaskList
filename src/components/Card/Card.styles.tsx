import { Card } from '@mui/material'
import styled, { css } from 'styled-components'

interface Props {
  color?: string
  shadow?: boolean
}

styled.div<Props>`
  display: flex;
  width: 100%;
  background-color: ${(props: Props) => (props.color ? props.color : '#fff')};
  border: none;
  border-radius: 0;
  padding: 1rem;

  ${(props: Props) =>
    props.shadow &&
    css`
      -webkit-box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 40%);
      box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 40%);
    `}
`

export default Card
