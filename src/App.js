import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { inizializedApp } from './redux/app-reducer'
import Preloader from './components/common/preloader/preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.inizializedApp()
  }
  render() {
    if (!this.props.inizialized) return <Preloader />
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/auth' render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => ({
  inizialized: state.app.inizialized
})
export default compose(
  connect(mapStateToProps, { inizializedApp }))(App);
