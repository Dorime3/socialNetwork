import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { inizializedApp } from './redux/app-reducer'
import Preloader from './components/common/preloader/preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import withSuspense from './components/hoc/withSuspense';
import Navbar from './components/Navbar/Navbar';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
// const NavbarContainer = React.lazy(() => import('./components/Navbar/NavbarContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
// const Login = React.lazy(() => import('./components/Login/Login'))

class App extends React.Component {
  componentDidMount() {
    this.props.inizializedApp()
  }
  render() {
    if (!this.props.inizialized) return <Preloader />
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route path='/users' render={withSuspense(UsersContainer)} />
          <Route path='/auth' render={() => <Login />} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  inizialized: state.app.inizialized
})
const AppContainer = compose(
  connect(mapStateToProps, { inizializedApp }))(App);

const SamuraiJSApp = () => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}
export default SamuraiJSApp;