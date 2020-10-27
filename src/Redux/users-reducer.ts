import { initializeApp } from "./app-reducer";
import { AppStateType, InferActionsTypes } from "./redux-store";
import { PhotosType, UserType } from "./../types/types";
import { usersAPI } from "../api/api";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, // array users ID
};

type initialState = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionTypes
): initialState => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_USERS": {
      return { ...state, users: action.users };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.count };
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    case "TOGGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }
    default:
      return state;
  }
};

type ActionTypes = InferActionsTypes<typeof action>;

export const action = {
  setTotalUsersCount: (totalUsersCount: number) =>
    ({ type: "SET_TOTAL_USERS_COUNT", count: totalUsersCount } as const),
  followSuccess: (userId: number) => ({ type: "FOLLOW", userId } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({ type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId } as const),
  unfollowSuccess: (userId: number) => ({ type: "UNFOLLOW", userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: "SET_USERS", users } as const),
  setCurrentPage: (currentPage: number) =>
    ({ type: "SET_CURRENT_PAGE", currentPage } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
};

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  //Thunk
  return async (dispatch: DispatchType, getState) => {
    let a = getState().app.initialized;
    dispatch(action.toggleIsFetching(true));
    dispatch(action.setCurrentPage(page));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(action.toggleIsFetching(false));
    dispatch(action.setUsers(data.items));
    dispatch(action.setTotalUsersCount(data.totalCount));
  };
};

export const follow = (userId: number): ThunkType => {
  //Thunk
  return async (dispatch) => {
    dispatch(action.toggleFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(action.followSuccess(userId));
    }
    dispatch(action.toggleFollowingProgress(false, userId));
  };
};

export const unfollow = (userId: number): ThunkType => {
  //Thunk
  return async (dispatch) => {
    dispatch(action.toggleFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(action.unfollowSuccess(userId));
    }
    dispatch(action.toggleFollowingProgress(false, userId));
  };
};

export default usersReducer;
