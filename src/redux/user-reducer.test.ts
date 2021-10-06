import usersReducer, { actions, InitialStateType } from "./users-reducer"

let state: InitialStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0, name: "Rodion 0", followed: false,
                photos: { large: null, small: null }, status: "status 0"
            },
            {
                id: 1, name: "Rodion 1", followed: false,
                photos: { large: null, small: null }, status: "status 1"
            },
            {
                id: 2, name: "Rodion 2", followed: true,
                photos: { large: null, small: null }, status: "status 2"
            },
            {
                id: 3, name: "Rodion 3", followed: true,
                photos: { large: null, small: null }, status: "status 3"
            }
        ],
        pageSize: 10,
        portionUsers: 25,
        usersCounts: 0,
        currentPage: 1,
        isFetching: false,
        isFollowingProgress: [] // array of users ids
    }
})

test("followSuccess", () => {
    const newState = usersReducer(state, actions.follow(1));

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test("unfollowSuccess", () => {
    const newState = usersReducer(state, actions.unfollow(3));

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})

