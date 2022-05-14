import { Typography } from '@mui/material'
import * as React from 'react'

import styles from './Card.module.css'

interface Props {
  title: string
}

const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <Typography variant="button" display="block">
          {title}
        </Typography>
      </div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  )
}

export default Card
