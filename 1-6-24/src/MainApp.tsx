import { useState } from "react";
import App from "./components/App";
import App2 from "./components/App2";


function MainApp() {
    const [page, setPage] = useState(App);
    return <>{page}</>
}

export default MainApp;