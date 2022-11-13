import axios from 'axios'
import { useEffect, useState } from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
  const [posts, setPosts] = useState({})
  
  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts')
    console.log(res.data)
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const renderedPosts = Object.values(posts).map(({title, id, comments}) => {
    return(
      <div className='card' style={{width: '30%', marginBottom: '20px'}} key={id}>
        <div className='card-body'>
          <h3>
            {title}
          </h3>
          <CommentList comments={comments}/>
          <CommentCreate postId={id}/>
        </div>
      </div>
    )
  })
  
  return(
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>

  )
}

export default PostList