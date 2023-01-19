import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './screen/telegram';
import Menu from './screen/menu,';
import Setting from './screen/settings';
import Login from './screen/login';
import Logout from './screen/logout';
import Chat from './screen/chat';
import Contact from './screen/contact';
import Profile from './screen/profile';

function App() {
  return (
    <div>             
      <BrowserRouter>
        <Routes>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/' element={<Login/>} />
          <Route path='/settings' element={<Setting/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/telegram' element={<Main/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='/chat/:id' element={<Chat/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
