import React from 'react';
import User from './User';
import Pagginator from '../common/pagginator/Pagginator';


const Users = (props) => {
    return (
        <div >
            <Pagginator
                portionUsers={props.portionUsers}
                usersCounts={props.usersCounts}
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}
                currentPage={props.currentPage} />
            {props.users.map(u => <User id={u.id} photos={u.photos} name={u.name} status={u.status} followed={u.followed} {...props} />)}
        </div>
    )
}

export default Users;