import './index.css';
import Layout from "./Layout";
import Home from "./Home";

import { Route, Routes } from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App;



