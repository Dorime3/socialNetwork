import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import { UsersPage } from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { inizializedApp, showGetError } from './redux/app-reducer'
import Preloader from './components/common/preloader/preloader';
import { Provider } from 'react-redux';
import store, { AppStateType } from './redux/redux-store';
import withSuspense from './components/hoc/withSuspense';
import Navbar from './components/Navbar/Navbar';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
// const NavbarContainer = React.lazy(() => import('./components/Navbar/NavbarContainer'))
// const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
// const Login = React.lazy(() => import('./components/Login/Login'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  inizializedApp: () => void,
  showGetError: (message: string) => void
}
const SuspendedProfile = withSuspense(ProfileContainer);
const SuspendedDialogs = withSuspense(DialogsContainer);

class App extends React.Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandleRejection = (event: PromiseRejectionEvent) => {
    console.warn("Внимание: Необработанная ошибка Promise. Позор вам! Причина: " + event.reason);
    this.props.showGetError(event.reason.message)
  }
  componentDidMount() {
    this.props.inizializedApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandleRejection);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandleRejection);
  }
  render() {
    if (!this.props.inizialized) return <Preloader />
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/profile' />} />
            <Route path='/profile/:userId?' render={() => <SuspendedProfile />} />
            <Route path='/dialogs' render={() => <SuspendedDialogs />} />
            <Route path='/users' render={() => <UsersPage pageTitle='Самураи' />} />
            <Route path='/auth' render={() => <Login />} />
            <Route path='/*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state: AppStateType) => ({
  inizialized: state.app.inizialized,
  globalError: state.app.globalError
})
const AppContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { inizializedApp, showGetError }))(App);

const SamuraiJSApp: React.FC = () => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}
export default SamuraiJSApp;