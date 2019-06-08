import { createStore } from 'redux'

const initialState = {
    name: '',
	address: '',
	city: '',
	state: '',
	zipcode: 0,
	image_url: '',
	mortgage: 0,
	rent: 0
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const UPDATE_CITY = 'UPDATE_CITY';
export const UPDATE_STATE = 'UPDATE_STATE';
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
export const UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL';
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
export const UPDATE_RENT = 'UPDATE_RENT';
export const CANCEL_LISTING = 'CANCEL_LISTING';

const reducer = (state=initialState,action) => {
    const { type, payload } = action
    switch(type) {
        case UPDATE_NAME:
            return { ...state, name: payload }
        case UPDATE_ADDRESS:
            return { ...state, address: payload }
        case UPDATE_CITY: 
            return { ...state, city: payload }
        case UPDATE_STATE:
            return { ...state, state: payload }
        case UPDATE_ZIPCODE:
            return { ...state, zipcode: payload }
        case UPDATE_IMAGE_URL:
            return { ...state, image_url: payload }
        case UPDATE_MORTGAGE:
            return { ...state, mortgage: payload }
        case UPDATE_RENT:
            return { ...state, rent: payload }
        case CANCEL_LISTING:
            return { ...initialState,  }
        default:
            return state
    }
}

export default createStore(reducer)