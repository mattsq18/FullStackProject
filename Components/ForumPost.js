import React from 'react'
import {Card} from 'react-bootstrap'

const ForumPost = (props) => {

  const date = new Date();

  const showTime = date.getHours() 
  + ':' + date.getMinutes() 
  + ":" + date.getSeconds();

  return (
    <div className="App">
        <header className="App-header">
            <Card>
                <Card.Title class="text-start" style={{ color: 'black' }}>{props.username}</Card.Title>
                <Card.Text style={{ color: 'black' }}>{props.posttext}</Card.Text>
                <Card.Text class="fs-6" style={{color: 'black'}}>Posted at: {showTime}</Card.Text>
            </Card>
        </header>
    </div>
  )
}

export default ForumPost