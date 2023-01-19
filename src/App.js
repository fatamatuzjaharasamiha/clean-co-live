
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Services from './pages/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PrivateRoute from './Authentication/PrivateRoute';
import AdminRoute from './Authentication/AdminRoute';
import Dashboard from './Dashboard/Dashboard';
function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          {/* <Route path='/about' element={<PrivateRoute>
            <About></About>
          </PrivateRoute>}></Route>
          <Route path='/services' element={
            <PrivateRoute>
              <Services></Services>
            </PrivateRoute>}>
          </Route> */}
          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path='/services' element={<Services></Services>}></Route>
            <Route path='/about' element={<About></About>}></Route>
          </Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>

          <Route element={<AdminRoute></AdminRoute>}>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          </Route>
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;
