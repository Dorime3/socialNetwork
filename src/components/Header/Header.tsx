import { Avatar, Col, Layout, Row, Menu, Button } from 'antd';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { selectCurrentUserLogin, selectIsAuth } from './AuthSelectors';
import { logoutMe } from '../../redux/auth-reducer';







export const AppHeader: React.FC<{}> = (props) => {
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()
    const logoutCallback = () => {
        dispatch(logoutMe())
    }
    const { Header } = Layout;

    return (
        <Header className="header">
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/developers">Developers</Link></Menu.Item>
                    </Menu>
                </Col>
                {isAuth
                    ? <>
                        <Col span={2}>
                            <div>
                                <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <div>
                                <Button onClick={logoutCallback}>Logout</Button>
                            </div>
                        </Col>
                    </>
                    :
                    <Col span={6}>
                        <Button>
                            <Link to='/auth'>Login</Link>
                        </Button>
                    </Col>}
            </Row>
        </Header>

        // <header className={s.header}>
        //     <img src='https://logonoid.com/images/human-rights-logo.png' />
        //     <div className={s.login}>
        // {props.auth
        //     ? <div><a href='#'>{props.email}</a> <button onClick={logoutCallback}>Logout</button> </div>
        //     : <NavLink to='/auth'>Login</NavLink>}
        //     </div>
        // </header>
    )
}

