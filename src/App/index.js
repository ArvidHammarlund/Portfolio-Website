import './index.css';
import Layout from "./Layout";
import Home from "./Home";
import Soduku from "./projects/soduku"
import ScrollToTop from "./ScrollToTop"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="soduku" element={<Soduku />}/>
          <Route path="website" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;



