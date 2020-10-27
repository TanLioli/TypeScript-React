import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
  _state: {
    profilePage: {
        posts: [
            {id: 0, message: 'Hi Andrey!', likesCount: 7},
            {id: 0, message: 'Hi Sergey!', likesCount: 2}
          ],
          newPostText: 'it-konopelko'
    },
      dialogsPage: {
        dialogs: [
          {id: 0, name:'Andrey'},
          {id: 1, name:'Artem'},
          {id: 2, name:'Timur'},
          {id: 3, name:'Sveta'},
          {id: 4, name:'Tania'},
          {id: 5, name:'Alisa'},
        ],
        messages: [
            {id: 0, messages:'Hi more'},
            {id: 1, messages:'good morning'},
            {id: 2, messages:'gut evening'},
            {id: 3, messages:'hi'},
            {id: 4, messages:'Neymar'},
            {id: 5, messages:'Ronaldo gool'},
          ],
          newMessageBody: ''
    }
},

  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log('changed tree')
},


 subscribe(observer){
  this._callSubscriber = observer;
 },

 dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;