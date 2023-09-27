import { GET_MOVIES , NEXT_PAGE, PREV_PAGE} from "./typeActions";

const InitialState = {
    arr: [],
    numPage: 1,
}

const rootReducer = (state = InitialState, { type, payload }) => {

    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                arr: [...payload]
            }
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1,
            };
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1,
            };
        default:
            return { ...state }
    }

}

export default rootReducer;