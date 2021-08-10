import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const mapStateToPropsRedirect = (state) => ({
    auth: state.auth.auth
})

const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Redirect to='/auth' />
            return (
                <Component {...this.props} />
            )
        }
    }
    const authRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return authRedirectComponent
}

export default withAuthRedirect