import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import AllProducts from './Pages/AllProducts/AllProducts';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequirAuth from './Pages/Login/RequirAuth';
import SignUp from './Pages/Login/SignUp';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App bg-purple-200">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/all-products' element={
          <RequirAuth>
            <AllProducts></AllProducts>
          </RequirAuth>}>
        </Route>
        <Route path='/purchase/:id' element={
          <RequirAuth>
            <Purchase></Purchase>
          </RequirAuth>}>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/dashboard' element={
          <RequirAuth>
            <Dashboard></Dashboard>
          </RequirAuth>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
