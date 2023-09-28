import { GET_MOVIES, NEXT_PAGE, PREV_PAGE, GET_NAME_SEARCH, GET_ORDER_MOVIE, GET_TYPE_MOVIE, GET_FILTER_YEAR } from "./typeActions";

const InitialState = {
    AllMovies: [],
    Movies: [],
    numPage: 1,
}

const rootReducer = (state = InitialState, { type, payload }) => {

    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                Movies: [...payload],
                AllMovies: [...payload]
            }
        case GET_NAME_SEARCH:
            return {
                ...state,
                Movies: [...payload]
            }
        case GET_ORDER_MOVIE:
            return {
                ...state,
                Movies: [...payload]
            }
        case GET_TYPE_MOVIE:
            return {
                ...state,
                Movies: [...payload]
            }
        case GET_FILTER_YEAR:
            return {
                ...state,
                Movies: [...payload]
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