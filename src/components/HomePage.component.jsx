import { Container, Grid } from '@mui/material'
import React from 'react'
import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div className='homepage' >
        <Container  >
            <Grid container  alignContent='center' direction="row" spacing={2}>
                <Grid border='1px solid red' item xs={4}>
                <div className='menu-item' >
                    <div className='content' >
                        <h1 className='title' > Hats </h1>
                        <span className='subtitle'> Shop now </span>
                    </div>
                </div>
                </Grid>
                <Grid border='1px solid red' item xs={4}>
                <div className='menu-item' >
                    <div className='content' >
                        <h1 className='title' > Jackets </h1>
                        <span className='subtitle'> Shop now </span>
                    </div>
                </div>
                </Grid>
                <Grid border='1px solid red' item xs={4}>
                <div className='menu-item' >
                    <div className='content' >
                        <h1 className='title' > Sneakers </h1>
                        <span className='subtitle'> Shop now </span>
                    </div>
                </div>
                </Grid>
                <Grid border='1px solid red' item xs={6}>
                <div className='menu-item' >
                    <div className='content' >
                        <h1 className='title' > Womens </h1>
                        <span className='subtitle'> Shop now </span>
                    </div>
                </div>
                </Grid>
                <Grid border='1px solid red' item xs={6}>
                <div className='menu-item' >
                    <div className='content' >
                        <h1 className='title' > Mens </h1>
                        <span className='subtitle'> Shop now </span>
                    </div>
                </div>
                </Grid>
            </Grid>
        </Container>
        <div className='directory-menu' >
            
            



        </div>
    </div>
  )
}

export default HomePage