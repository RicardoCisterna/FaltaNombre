import React from 'react'
import Container from '../../components/Container'
import Post from '../../components/Post'


export default class Profile extends React.Component{
    public render(){
        return(
            <Container>
                  <div style={{ margin: "0 auto" }}>
          <Post
            image={"https://img-9gag-fun.9cache.com/photo/aoPPm6m_460swp.webp"}
          />
          <Post
            image={"https://img-9gag-fun.9cache.com/photo/aoPPm6m_460swp.webp"}
          />
           <Post
            image={"https://img-9gag-fun.9cache.com/photo/aoPPm6m_460swp.webp"}
          />
        </div>
            </Container>
        )
    }
}