import React,{useEffect} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'
import Checkout from './components/Checkout';
import Login from './components/Login'
import { useStateValue } from './ReactContextAPI/StateProvider'
import { auth } from './firebase';

function App() {

  const [{user},dispatch]=useStateValue();

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // user is logged in
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        // logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });

    return ()=>{
      unsubscribe();
    };
    
  }, [])
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <Switch>
          
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/checkout"  component={Checkout}/>
          <Route path="/login" component={Login}/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
