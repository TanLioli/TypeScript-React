import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType2 = {
    usersId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    usersId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false 
};

export type InitialStateType = typeof initialState



const authReducer = (state = initialState, action: any): InitialStateType2 => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.payload,
                }
          default : 
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type  SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
     payload: SetAuthUserDataActionPayloadType
    
}

export const setAuthUserData = (userId: number , email: string, login: string, isAuth: boolean):  SetAuthUserDataActionType => ({
    type: SET_USER_DATA, payload:  
        {userId, email, login, isAuth} })



export const getAuthUserData = () => async (dispatch: any) => {
   let meData = await authAPI.me()
        
            if (meData.resultCode === 0) {
                let {id, email, login} = meData.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
     }

export const Login = (email: string, password: string, rememberMe: boolean) => async  (dispatch: any) => {
   
    let data = await authAPI.login(email, password, rememberMe)
       if (data.resultCode === 0) {
               dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0  ? data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
       }

export const Logout = () => async (dispatch: any) =>  {
    let response = await authAPI.logout();
        
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }

export default authReducer;
