import React from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../ReactContextAPI/StateProvider';
import { auth } from '../firebase';
function Navbar() {
    const [{basket,user}]=useStateValue();
    console.log(user);


   const login=()=>{
       if(user){
           
           auth.signOut();
       }
   } 

    return (
        
            <nav className="navbar__section navbar navbar-expand-lg">
                
                   <Link to="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon" className="navbar__brand navbar-brand"/></Link> 
                  
  
                   <div className="navbar__search hiddennav">
                       <input type="text" className="navbar__searchInput"/>
                       <SearchIcon className="search__icon"/>
                   </div>

                   <div className="header__nav ml-auto">
                   
                  
                      
                       <Link to={!user&& "/login"} className="navbar__link" >
                           <div className="navbar__option" onClick={login}>
                               <span className="header__option1">Hello {user?.email}</span>
                               <span className="header__option2">{user?"Sign Out":"Sign In"}</span>
                           </div>
                       </Link>
                 
                      
                  
                      
                       <Link to="/" className="navbar__link hiddennav">
                           <div className="navbar__option">
                               <span className="header__option1">Returns</span>
                               <span className="header__option2">& Orders</span>
                           </div>
                       </Link>
                     
                
                       <Link to="/" className="navbar__link hiddennav">
                           <div className="navbar__option">
                               <span className="header__option1">Your</span>
                               <span className="header__option2">Prime</span>
                           </div>
                       </Link>
                    
                     
                       <Link to={user?"/checkout":"/login"} className="navbar__link">
                         <div className="navbar__optionBasket">
                             <ShoppingBasketIcon/>
    <span className="header__option2 basket__count">{basket?.length}</span>
                        </div>  
                       </Link>
                  
                     
                       </div>
            </nav>
     
    )
}

export default Navbar
