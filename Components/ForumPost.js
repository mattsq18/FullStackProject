import React from 'react'
import {Card} from 'react-bootstrap'

const ForumPost = (props) => {

  const date = new Date();

  return (
    <div className="App">
            <Card>
                <Card.Title class="text-start" style={{ color: 'black' }}>{props.username}</Card.Title>
                <Card.Text style={{ color: 'black' }}>{props.posttext}</Card.Text>
                <Card.Text class="fs-6" style={{color: 'black'}}>Posted at: {props.showtime}</Card.Text>
            </Card>
    </div>
  )
}

export default ForumPost