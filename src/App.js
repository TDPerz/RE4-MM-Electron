import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Index';
import { BrowserRouter, Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Settings from './Components/Settigns/Settings';
import '../node_modules/antd/dist/antd.dark.css'
import Containers from './Components/Container';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Containers />}>
          <Route path='' element={<Home />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
