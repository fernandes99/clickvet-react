import { createStore } from 'redux';

const INITIAL_STATE = {
    mode: process.env.NODE_ENV,
    loading: false,
    vetList: [],
}

function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: action.set }
        case 'SET_VET_LIST':
            return { ...state, vetList: action.set }
        default:
            return state
    }
}

const Store = createStore(reducer);

export default Store;