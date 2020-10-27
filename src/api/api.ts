import axios, { AxiosResponse } from 'axios';

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "api-key": "5e570632-1888-4fb2-b655-4766381db1ec"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
       });
    },
    follow(userId: number) {
       return  instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
       return instance.delete(`follow/${userId}`)
    },
    getProfile (userId: number) {
        console.warn('obsolete method')
      return profileAPI.getProfile(userId)
     }
}

export const profileAPI = {
    getProfile (userId: number) {
      return  instance.get(`profile/` + userId);
     }, 
     getStatus(userId: number) {
        return  instance.get(`profile/status/` + userId);
     },
     updateStatus(status: string) {
        return  instance.put(`profile/status`, {status: status});
     }
}
type MeResponseType = {
   data: {
      id:number
      email: string
      login: string
      }
   resultCode: number
   messages: Array<string>
}

type LoginResponseType = {
   data: {
      userId: number
   }
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
     },
     login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe})
         .then(res => res.data)
     },
     logout () {
        return instance.delete(`auth/login`); 
     }
}


