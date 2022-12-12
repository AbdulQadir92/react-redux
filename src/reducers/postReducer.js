import { FETCH_POSTS, ADD_POST, FETCH_POST, DELETE_POST } from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }

        case ADD_POST:
            return {
                ...state,
                item: action.payload,

                // for demo purpose with fake restapi
                items: [action.payload, ...state.items]
            }

        case FETCH_POST:
            return {
                ...state,
                item: action.payload
            }

        case DELETE_POST:
            return {
                ...state,
                item: action.payload,

                // for demo purpose with fake restapi
                items: [...state.items.filter(item => item.id !== state.item.id)]
            }

        default:
            return state
    }
}

export default postReducer