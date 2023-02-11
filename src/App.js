import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import CreateAccount from './Pages/CreateAccount';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import MyNav from './Components/Nav/MyNav';
import RecoverPass from './Pages/RecoverPass';
import UserList from './Pages/UserList';

function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/recoverPass" element={<RecoverPass />} />
        <Route path="/UserList" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
