import React, {useEffect} from 'react';
import { useSelector,useDispatch} from "react-redux";


import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

import {selectUser} from './features/userSlice';
import Login from './Login';
import {auth} from './firebase';

import {login, logout} from './features/userSlice'

function App() {
  const dispatch = useDispatch()

  const user = useSelector(selectUser);


  useEffect(() => {


    auth.onAuthStateChanged((authUser)=>{
      console.log('user is ', authUser)
      if (authUser){
        //login user
        dispatch(
          login({
            uid         : authUser.uid,
            photo       : authUser.photoURL,
            email       : authUser.email,
            displayName : authUser.displayName,

          })
        );
      } else {
        //the user is logged out
        dispatch(logout());
      }
    })


  }, [dispatch])





  return (
    //BEM naming convention
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Chat />
        </>
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
