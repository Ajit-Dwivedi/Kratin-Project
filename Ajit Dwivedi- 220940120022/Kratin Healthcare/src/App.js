import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/userRegister/SignUp";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<SignUp/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
