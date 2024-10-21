import {
    GET_ALLSEO_BEGIN,
    GET_ALLSEO_ERROR,
    GET_ALLSEO_SUCCESS
} from '../actions';

export const seo_reducer = (state, action) => {
    if(action.type === GET_ALLSEO_BEGIN) {
        return {...state, seoList_loading: true, seoList_loading: false}
    }

    if(action.type === GET_ALLSEO_ERROR) {
        return {...state, seoList_loading: false, seoList_error: true}
    }

    if(action.type === GET_ALLSEO_SUCCESS) {
        return {...state, seoList_loading: false, seoList: action.payload}
    }
};

export default seo_reducer;