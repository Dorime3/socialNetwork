import React, { useEffect } from 'react';
import User from './User';
import Pagginator from '../common/pagginator/Pagginator';
import { UserType } from '../../types/types';
import { UserSearchForm } from './usersSearchForm';
import { FilterType, followSuccessThunkAction, getUsersThunkAction, unfollowSuccessThunkAction } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPage, getFollowingProgress, getPageSize, getPortionUsers, getUsersCounts, getUsersFilter, getUsersSelector } from './UsersSelectors';
import { useHistory } from 'react-router';

type PropsType = {
    // usersCounts: number,
    // pageSize: number,
    // portionUsers: number,
    // currentPage: number,
    // onFilterChanged: (filter: FilterType) => void,
    // users: Array<UserType>,
    // unfollowSuccessThunkAction: (userId: number) => void,
    // followSuccessThunkAction: (userId: number) => void,
    // isFollowingProgress: Array<number>
}
export const Users: React.FC<PropsType> = (props) => {

    const usersCounts = useSelector(getUsersCounts)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const portionUsers = useSelector(getPortionUsers)
    const filter = useSelector(getUsersFilter)
    const users = useSelector(getUsersSelector)
    const isFollowingProgress = useSelector(getFollowingProgress)
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(() => {
        const { search } = history.location
        const params = new URLSearchParams(search);
        let actualPage = currentPage;
        let actualFilter = filter;
        if (!!params.get('page')) actualPage = Number(params.get('page'));
        if (!!params.get('term')) actualFilter = { ...actualFilter, term: params.get('term') as string }
        if (!!params.get('friend')) actualFilter = { ...actualFilter, friend: params.get('friend') === 'null' ? null : params.get('friend') === 'true' ? true : false }
        dispatch(getUsersThunkAction(actualPage, pageSize, actualFilter))
    }, [])
    useEffect(() => {
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage])

    const follow = (userId: number) => {
        dispatch(followSuccessThunkAction(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowSuccessThunkAction(userId))
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersThunkAction(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunkAction(1, pageSize, filter))
    }

    return (
        <div >
            <UserSearchForm onFilterChanged={onFilterChanged} />
            <Pagginator
                portionUsers={portionUsers}
                usersCounts={usersCounts}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage} />
            {users.map(u =>
                <User
                    key={u.id}
                    user={u}
                    follow={follow}
                    unfollow={unfollow}
                    isFollowingProgress={isFollowingProgress}
                />)}
        </div>
    )
}
