import { useState } from "react";
import Button from "./button";
import axios from "axios";

function App() {

  const [msg, setMsg] = useState("my app");
  const [posts, setPosts] = useState([]);
  
  const [cnt, setCnt] = useState(0);

  const rp = async () => {
    const res = await axios.get("http://localhost:3000/posts")
    console.log(res.data)
    setPosts(() => { return res.data})
  }

  const inc = () => {
    setCnt(() => {return cnt+1})
  }

  const func1 = () => {
    console.log("Btn 1 clicked")
    setMsg(() => {return "btn 1 clicked"});
    inc();
  }

  const func2 = () => {
    console.log("Btn 2 clicked");
    setMsg(() => {return "btn 2 clicked"});
  }
  const func3 = () => {
    console.log("Btn 3 clicked");
    setMsg(() => {return "btn 3 clicked"});
  }
  

  return <>
    <div>{msg+" "+cnt}</div> 
    <Button text="Btn 1" func={func1}/>
    <Button text="Btn 2" func={func2}/>
    <Button text="Btn 3" func={func3}/>
    <Button text="Btn 4" func={rp}/>
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  </>
}

export default App
