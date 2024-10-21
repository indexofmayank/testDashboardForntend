import React, {useEffect, useState, useContext, useReducer} from "react";
import reducer from '../reducer/seo_reducer';
import axios from "axios";
import {
    GET_ALLSEO_BEGIN,
    GET_ALLSEO_ERROR,
    GET_ALLSEO_SUCCESS
} from '../actions';
import {createSeo_url, getAllSeo_url} from '../utils/constants';


const SeoContext = React.createContext();

const initialState = {
    seoList_loading: false,
    seoList_error: true,
    seoList: [],    
}

export const SeoProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchSeoList = async () => {
        dispatch({type: GET_ALLSEO_BEGIN});
        try {
            const response = await axios.get(getAllSeo_url);
            const {data} = response;
            dispatch({type: GET_ALLSEO_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: GET_ALLSEO_ERROR});
        }
    }

    return(
        <SeoContext.Provider
            value={{
                ...state,
                fetchSeoList
            }}
        >
            {children}
        </SeoContext.Provider>
    );
}


export const useSeoContext = () => {
    return useContext(SeoContext)
}