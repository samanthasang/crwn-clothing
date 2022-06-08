import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homePage';
import Shoppage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signIn-signUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.action';

import './App.css';

class App extends Component {

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({ 
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser({ userAuth });
    })
 }
 componentWillUnmount()
 {
  this.unsubscribeFromAuth();
 }  
 render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/shop' element={<Shoppage />}/>
          <Route path='/signin' element={<SignInAndSignUpPage />}/>
        </Routes>
        
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
