import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homePage';
import Shoppage from './pages/shop/shop';
import Header from './components/header/header';
import CheckOutPage from './pages/checkout/checkout';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signIn-signUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.action';

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from './redux/user/user.selector';

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
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={Shoppage}/>
          <Route path='/checkout' component={CheckOutPage}/>
          {/* <Route path='/signin' element={<SignInAndSignUpPage />}/> */}
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>
        </Switch>
        
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
