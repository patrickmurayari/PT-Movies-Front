import { GET_MOVIES, PREV_PAGE, NEXT_PAGE } from "./typeActions";
import axios from "axios";

export function getMovies() {
    
    return async function (dispatch) {
        console.log('actiopns');
        try {
            var json = await axios.get(`https://pt-movies-back.vercel.app/movie/all`)
            console.log('::JSON.DATA::', json.data);
            return dispatch({
                type: GET_MOVIES,
                payload: json.data
            })
        } catch (error) {
            alert(`Message ${GET_MOVIES}:`, error);
        }
    }
}

export function prevPage() {
    return {
        type: PREV_PAGE,
    };
}

export function nextPage() {
    return {
        type: NEXT_PAGE,
    };
}