
import './App.css';
import {ToastContainer} from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css' 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import { useDispatch } from 'react-redux'; 
import { useEffect } from 'react';
import { setUser } from './redux/features/authSlice';
import AddEditTour from './pages/AddEditTour';
import Modal from 'react-modal';
import "./components/FontAwesomicon"
import Calendar from './components/Calendar';


Modal.setAppElement('#root');

function App() {
  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem("profile"))

  useEffect(()=>{

    dispatch(setUser(user))
  },[])
  return (

    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer />
      <Routes>
        {/* <Route path='/' element={<Home/>} />  */}
        <Route path='/home' element = {<Home/>} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/addTour' element={<AddEditTour/>} />
        <Route path='/editTour/:id' element ={<AddEditTour/>} />
        <Route path='/home/Calendar' element={<Calendar />} />
        
      </Routes>
      
          </div>
    </BrowserRouter>
  );
}

export default App;
