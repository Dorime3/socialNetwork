import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
//import ProfileContainer from './components/Profile/ProfileContainer';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import { UsersPage } from './components/Users/UsersContainer';
import { Login } from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { inizializedApp, showGetError } from './redux/app-reducer'
import Preloader from './components/common/preloader/preloader';
import { Provider } from 'react-redux';
import store, { AppStateType } from './redux/redux-store';
import withSuspense from './components/hoc/withSuspense';
import Navbar from './components/Navbar/Navbar';
import { Layout, Menu, Breadcrumb, Avatar, Col, Row } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import s from './components/Navbar/Navbar.module.css';
import { AppHeader } from './components/Header/Header';


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
    const { SubMenu } = Menu;
    const { Content, Footer, Sider } = Layout;
    return (
      <Layout>
        <AppHeader />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
                  <Menu.Item key="1"><Link to="/profile" >Profile</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/dialogs" >Messages</Link></Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
                  <Menu.Item key="5"><Link to="/developers" >Developers</Link></Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Switch>
                <Route exact path='/' render={() => <Redirect to='/profile' />} />
                <Route path='/profile/:userId?' render={() => <SuspendedProfile />} />
                <Route path='/dialogs' render={() => <SuspendedDialogs />} />
                <Route path='/developers' render={() => <UsersPage pageTitle='Самураи' />} />
                <Route path='/auth' render={() => <Login />} />
                <Route path='/*' render={() => <div>404 NOT FOUND</div>} />
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Rodion ©2021</Footer>
      </Layout>
      // <div className='app-wrapper'>
      //   <HeaderContainer />
      //   <Navbar />
      //   <div className='app-wrapper-content'>
      // <Switch>
      //   <Route exact path='/' render={() => <Redirect to='/profile' />} />
      //   <Route path='/profile/:userId?' render={() => <SuspendedProfile />} />
      //   <Route path='/dialogs' render={() => <SuspendedDialogs />} />
      //   <Route path='/users' render={() => <UsersPage pageTitle='Самураи' />} />
      //   <Route path='/auth' render={() => <Login />} />
      //   <Route path='/*' render={() => <div>404 NOT FOUND</div>} />
      // </Switch>
      //   </div>
      // </div>
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