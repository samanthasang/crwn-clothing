import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homePage';
import Shoppage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signIn-signUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState ({ 
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth});
    })
 }
 componentWillUnmount()
 {
  this.unsubscribeFromAuth();
 }  
 render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route path='/shop' element={<Shoppage />}/>
          <Route path='/signin' element={<SignInAndSignUpPage />}/>
        </Routes>
        
      </div>
    );
  }
}

export default App;
