import { Container, Grid } from '@mui/material'
import React from 'react'
import Directory from '../../components/directory/Directory'
import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div className='homepage' >
        <Container >
            <Directory />
        </Container>
    </div>
  )
}

export default HomePage