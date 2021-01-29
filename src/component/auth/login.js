import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import GoogleAuth from './googleAuth'

const LogIn = () => {
  return (
    <Container className='login-container'>
      <Row xs='auto' className='login-wrapper'>
        <Col xs={{ span: 2, offset: 5 }} className='login-content'>
          <GoogleAuth type='LOGIN' />
        </Col>
      </Row>
    </Container>
  )
}

export default LogIn
