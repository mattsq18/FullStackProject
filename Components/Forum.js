import React from 'react'
import { Container,Form,Button } from 'react-bootstrap';
import ForumPost from "./ForumPost";
import {useState} from 'react'

const Forum = (user) => {

  const [details,setDetails] = useState({posttext:""})
  const date = new Date();

  const showTime = date.getHours() 
  + ':' + date.getMinutes() 
  + ":" + date.getSeconds();


  const posts = [{name:"jones",posttext:"test text"},{name:"Whisp",posttext:"Hello"}];

  const updatePosts = e => {
    e.preventDefault();
    const names = user.name;
    const content = details.posttext
    posts.push({name:{names},posttext:{content}});
    setDetails("");
  }


  return (
    <div>
      <header className='App-header'>
        <Container>
          {posts.map((post) => <ForumPost username={post.name} posttext={post.posttext}></ForumPost>)}
        </Container>
          <form className='fixed-bottom' onClick={updatePosts}>
            <Form.Group className="mb-3" controlId='formBasicUsername'>
              <Form.Label>Post</Form.Label>
              <Form.Control type="username" placeholder="Share your thoughts with the world" onChange={e => setDetails({...details, password: e.target.value})} value={details.posttext}/>
            </Form.Group>
            <Button type="submit">Post</Button>
          </form>
        </header>
    </div>
  )
}

export default Forum