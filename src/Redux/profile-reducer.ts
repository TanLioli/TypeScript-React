import { PostType, ProfileType } from './../types/types';
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 0, message: 'Hi Andrey!', likesCount: 7},
        {id: 0, message: 'Hi Sergey!', likesCount: 2},
       ] as Array <PostType>,
     profile: null as ProfileType | null,
     status: '',
     newPostText: '' 
}

export type  InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType=> {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
         id: 5,
         message: action.newPostText,
         likesCount: 0
       };
        return {
            ...state,
             posts: [...state.posts, newPost],
              newPostText: ''
            };
         }
        case SET_STATUS: {
            return {
                ...state,
                 status: action.status
            };
        }
        case  SET_USER_PROFILE: {
            return {
                ...state,
                 profile: action.profile
            };
        }
       default : 
            return state;
    }
}

type  AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({type: ADD_POST, newPostText})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})



export const getUserProfile = (userId: number) => async (dispatch: any) => {
   let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    
} 

export const getStatus = (userId: number) => async (dispatch: any) => {
   let response = await profileAPI.getStatus(userId)
         dispatch(setStatus(response.data));
    } 

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await  profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
    } 

export default profileReducer;