import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../../redux/redux-store'

const mapStateToPropsRedirect = (state: AppStateType) => ({
    auth: state.auth.auth
})

type MapPropsType = {
    auth: boolean
}
type DispatchPropsType = {
}

function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {

        let { auth, ...restProps } = props
        if (!auth) return <Redirect to='/auth' />

        return (
            <WrappedComponent {...restProps as WCP} />
        )
    }

    const authRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(
        mapStateToPropsRedirect)
        (RedirectComponent);

    return authRedirectComponent
}

export default withAuthRedirect