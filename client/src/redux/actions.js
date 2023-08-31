import axios from 'axios';
import {
    GET_ALL_COUNTRIES,
    GET_ACTIVITIES,
    GET_COUNTRY_BY_NAME,
    GET_COUNTRY_DETAIL,
    FILTER_BY_CONTINENTS,
    FILTER_BY_ACTIVITIES,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    POST_ACTIVITY
} from './actionTypes';


export function getCountries() {
    return async function (dispatch) {
        try {
            var response = await axios.get('/countries')
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getCountriesByName(payload) {
    return async function (dispatch) {
        try {
            var response = await axios.get('/countries' + '?name=' + payload)
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: response.data
            });
        } catch (error) {
            alert('Error 404: Country not found', window.location.reload())
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            var response = await axios.get('/countries' + `/${id}`)
            return dispatch({
                type: GET_COUNTRY_DETAIL,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function getActivities() {
    return async function (dispatch) {
        try {
            var response = await axios.get('/activities')
            return dispatch({
                type: GET_ACTIVITIES,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export function postActivity(payload) {
    return function (dispatch) {
        try {
            axios.post('/activities', payload)
                .then((data) => {
                    return dispatch({
                        type: POST_ACTIVITY,
                        payload: data
                    });
                })
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterByContinents = (continents) => {
    return {
        type: FILTER_BY_CONTINENTS,
        payload: continents
    }
}
export const filterByActivities = (selectedActivity) => {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload: selectedActivity
    }
}

export const orderByName = (orderBy) => {
    return {
        type: ORDER_BY_NAME,
        payload: orderBy,
    };
};

export const orderByPopulation = (orderByN) => {
    return {
        type: ORDER_BY_POPULATION,
        payload: orderByN,
    };
};