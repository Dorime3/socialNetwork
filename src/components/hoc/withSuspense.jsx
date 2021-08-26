import React from 'react'


const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Component {...props} />
            </React.Suspense>
        )
    }
}

export default withSuspense;