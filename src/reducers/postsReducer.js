import { FETCH_POSTS, SAVE_POSTS } from '../constants/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action){
    console.log(action)    
    switch(action.type) {
        case FETCH_POSTS:
            return {
             ...state,
             items: action.payload
            }
            case SAVE_POSTS:
            return {
             ...state,
             item: action.payload
            }
        default:
        console.log(state)
        return state;
    }
}