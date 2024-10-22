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

    const saveSeo = async (select_page, meta_title, meta_description, meta_keywords) => {
        console.log(select_page);
        console.log(meta_title);
        console.log(meta_description);
        console.log(meta_keywords);
        try {
            const response = await axios.post(createSeo_url, {
                select_page,
                meta_title,
                meta_description,
                meta_keywords
            });
            const {success, data} = response;
            return {success, data};
        } catch (error) {
            const {message} = error.message;
            return {success: false, message};
        }
    }

    return(
        <SeoContext.Provider
            value={{
                ...state,
                fetchSeoList,
                saveSeo
            }}
        >
            {children}
        </SeoContext.Provider>
    );
}


export const useSeoContext = () => {
    return useContext(SeoContext)
}