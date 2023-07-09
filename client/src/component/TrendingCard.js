import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import codeWars from '../../assest/Photos/PastEvents/codingcompetitions.jpg'

export const TrendingCard = () => {
  return (
    <Card style={{ width: '22rem', margin : "1rem 0rem" }}>
    <Card.Img variant="top" src= {codeWars} />
    <Card.Body>
      <Card.Title>Code Wars</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In mollitia cum hic quidem! Esse repudiandae totam aliquid nam laborum vero delectus error quae.
      </Card.Text>
      <Button variant="primary">See Photos</Button>
    </Card.Body>
  </Card>
  )
}
