import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileInfo/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import {compose} from 'redux';
import { initializeApp} from './Redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';

class App  extends React.Component {
   componentDidMount() {
      this.props.initializeApp();
   }
   render() {
      if (!this.props.initialized) {
         return <Preloader/>
      }
   return (
   <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsContainer /> }/> 

        <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>

        <Route path='/users' render={ () => <UsersContainer /> }/> 

        <Route path='/login' render={ () => <Login /> }/> 
      </div>
     </div>
    )
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})
let AppContainer = compose (
   withRouter,
   connect (mapStateToProps, {initializeApp}))(App);

   const SamuraiJSApp = (props) => {
      return <BrowserRouter>
         <Provider store={store}>
         <AppContainer/>
         </Provider>
      </BrowserRouter>
   }

   export default SamuraiJSApp
   
