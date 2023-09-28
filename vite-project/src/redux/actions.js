import { GET_MOVIES, PREV_PAGE, NEXT_PAGE, GET_NAME_SEARCH, GET_ORDER_MOVIE, GET_TYPE_MOVIE, GET_FILTER_YEAR } from "./typeActions";
import axios from "axios";

export function getMovies() {

    return async function (dispatch) {
        console.log('actiopns');
        try {
            var json = await axios.get(`http://localhost:3001/movie/all`)
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

export function getNameSearch(name) {
    return async function (dispatch) {
        try {
            var getName = await axios.get(`http://localhost:3001/movie/all?name=${name}`);
            return dispatch({
                type: GET_NAME_SEARCH,
                payload: getName.data
            })
        } catch (error) {
            alert(`Message ${GET_NAME_SEARCH}:`, error);
        }
    }
}

export function getOrderMovie(value) {
    console.log(value);
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/movie/orderMovies?order=${value}`);
            return dispatch({
                type: GET_ORDER_MOVIE,
                payload: json.data
            })
        } catch (error) {
            alert(`Message ${GET_ORDER_MOVIE}:`, error);
        }
    }
}

export function getTypeMovie(value) {
    console.log(value);
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/movie/typeFilter?type=${value}`);
            return dispatch({
                type: GET_TYPE_MOVIE,
                payload: json.data
            })
        } catch (error) {
            alert(`Message ${GET_TYPE_MOVIE}:`, error);
        }
    }
}

export function getYearFilter(startYear ,endYear) {
    console.log('::input1::', startYear);
    console.log('::input2::', endYear);
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/movie/yearFilter?rango1=${startYear}&rango2=${endYear}`);
            return dispatch({
                type: GET_FILTER_YEAR,
                payload: json.data
            })
        } catch (error) {
            alert(`Message ${GET_FILTER_YEAR}:`, error);
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