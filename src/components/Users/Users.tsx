import React from 'react';
import User from './User';
import Pagginator from '../common/pagginator/Pagginator';
import { UserType } from '../../types/types';

type PropsType = {
    usersCounts: number,
    pageSize: number,
    portionUsers: number,
    currentPage: number,
    onPageChanged: (pageNum: number) => void,
    users: Array<UserType>,
    unfollowSuccessThunkAction: (userId: number) => void,
    followSuccessThunkAction: (userId: number) => void,
    isFollowingProgress: Array<number>
}
const Users: React.FC<PropsType> = (props) => {
    return (
        <div >
            <Pagginator
                portionUsers={props.portionUsers}
                usersCounts={props.usersCounts}
                pageSize={props.pageSize}
                onPageChanged={props.onPageChanged}
                currentPage={props.currentPage} />
            {props.users.map(u =>
                <User
                    user={u}
                    unfollowSuccessThunkAction={props.unfollowSuccessThunkAction}
                    followSuccessThunkAction={props.followSuccessThunkAction}
                    isFollowingProgress={props.isFollowingProgress}
                />)}
        </div>
    )
}

export default Users;