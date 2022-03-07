import { Grid, Typography } from '@mui/material'
import React from 'react'
import './menuItem.css'

const MenuItem = ({id, title, imageUrl, size, twoLasrElements}) => {
  return (
    twoLasrElements.includes(id) ? (
      <Grid className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }} item xs={6}>
      <Grid item xs={12} className='content' >
          <Typography className='title' > {title} </Typography>
          <span className='subtitle'> Shop now </span>
      </Grid>
    </Grid>
    ) : (
      <Grid className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }} item xs={4}>
      <Grid item xs={12} className='content' >
          <Typography className='title' > {title} </Typography>
          <span className='subtitle'> Shop now </span>
      </Grid>
    </Grid>
    )
  )
}

export default MenuItem