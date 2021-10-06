import { actions, followSuccessThunkAction, unfollowSuccessThunkAction } from "./users-reducer";
import { UsersApi } from "../components/api/UsersApi";
import { APIResponseType, ResultCodesEnum } from "../components/api/requestsAPI";
jest.mock("../components/api/UsersApi")
const UsersApiMock = UsersApi as jest.Mocked<typeof UsersApi>
const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}
UsersApiMock.userFollow.mockReturnValue(Promise.resolve(result))



test("followThunk", async () => {
    const thunk = followSuccessThunkAction(1);
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, actions.toggleFollowingProgress(false, 1))
    expect(dispatchMock).toHaveBeenCalledWith(3, UsersApiMock.userFollow(1))
})

test("unfollowThunk", async () => {
    const thunk = unfollowSuccessThunkAction(1);
    const dispatchMock = jest.fn();
    const getStateMock = jest.fn();

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenCalledWith(1, actions.toggleFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenCalledWith(2, actions.toggleFollowingProgress(false, 1))
    expect(dispatchMock).toHaveBeenCalledWith(3, UsersApiMock.userUnfollow(1))
})