

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/finalProject/scrrens/product/ProductList';
import Login from './Components/finalProject/scrrens/user/Login';
import SignUp from './Components/finalProject/scrrens/user/SignUp';
import ProductToAdd from './Components/finalProject/scrrens/product/ProductToAdd';
import ShoppingCart from './Components/finalProject/scrrens/order/ShoppingCart';
import Navbar from './Components/finalProject/navs/NavBar';
import AddOrder from './Components/finalProject/scrrens/order/AddOrder'
import Orders from './Components/finalProject/scrrens/order/Orders';
import UsersForAdmin from './Components/finalProject/scrrens/user/UsersForAdmin';
import AddUpdateProduct from './Components/finalProject/scrrens/product/AddUpdateProduct'


function App() {
  return (   
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>       
       <Routes>
          <Route path='/' element={<ProductList/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/products' element={<ProductList/>}></Route> 
          <Route path='/signup' element={<SignUp/>}></Route>  
          <Route path='/productToAdd' element={<ProductToAdd/>}></Route> 
          <Route path='/shoppingCart' element={<ShoppingCart show='false'/>}></Route>
          <Route path='/addOrder' element={<AddOrder />}></Route> 
          <Route path='/orders' element={<Orders />}></Route>  
          <Route path='/users' element={<UsersForAdmin />}></Route>       
          <Route path='/addupdateproduct' element={<AddUpdateProduct />}></Route>       
        </Routes>
        </BrowserRouter>   
    </div>    
  );
}

export default App;

