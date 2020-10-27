const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    messages: string
}

let initialState = {

  dialogs: [
        {id: 0, name:'Andrey'},
        {id: 1, name:'Artem'},
        {id: 2, name:'Timur'},
        {id: 3, name:'Sveta'},
        {id: 4, name:'Tania'},
        {id: 5, name:'Alisa'},
      ] as Array<DialogType>,

    messages: [
        {id: 0, messages:'Hi more'},
        {id: 1, messages:'good morning'},
        {id: 2, messages:'gut evening'},
        {id: 3, messages:'hi'},
        {id: 4, messages:'Neymar'},
        {id: 5, messages:'Ronaldo gool'},
      ] as Array <MessageType>,
    };

    export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType=> {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
             return {
                ...state,
                messages: [...state.messages, {id: 6, messages: body}]
            };
           default:
                return state;  
    }
 }

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})
    
export default dialogsReducer;