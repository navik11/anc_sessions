import axios from 'axios'
import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([])

  return (
    <>
    <div>Our app</div>
    <button onClick={async () => {
      const res = await axios.get("http://localhost:3000/posts")
      console.log(res.data)
      setPosts(res.data)
    }}>Click me</button>
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
    </>
  )
}

export default App
