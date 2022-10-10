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


  const posts = [];

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
          {posts.map((post,key) => <ForumPost key={key} username={post.name} posttext={post.posttext}></ForumPost>)}
        </Container>
          <form className='fixed-bottom' onSubmit={updatePosts}>
            <Container>
              <Form.Group className="mb-3" controlId='formBasicUsername'>
                <Form.Control type="username" placeholder="Share your thoughts with the world" onChange={e => setDetails({...details, password: e.target.value})} value={details.posttext}/>
                <Button type="submit">Post</Button>
              </Form.Group>
            </Container>
          </form>
        </header>
    </div>
  )
}

export default Forum