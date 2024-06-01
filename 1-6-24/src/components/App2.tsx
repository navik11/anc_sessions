import { useEffect, useState } from "react"
import Button from "./button";

function App2() {

const [cnt, setCnt] = useState(0);

useEffect(() => {
  console.log("cnt changed")
}, [cnt]);

const func = () => {
  setCnt(() => {return cnt+1});
}

  return <>
    <div>{"App 2" + " "+cnt}</div>
    <Button text="changecnt" func={func}/>
  </>
}

export default App2
