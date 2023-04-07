import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => {
  return (
    <Container>
    <h1 className='text-center mt-5'>Welcome, Guest!</h1>
    <LinkContainer to="/">
                <Button variant='warning'>Back</Button>
    </LinkContainer>

    </Container>
  )
}

export default Home