import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    watchList: localStorage.getItem("watchlist") 
    ? JSON.parse(localStorage.getItem("watchlist")) : 
    [] ,
    watched: localStorage.getItem("watched") 
    ? JSON.parse(localStorage.getItem("watched")) : 
    [] 

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchList));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state])

    const addMovieToWatchedList = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }


    return(
        <GlobalContext.Provider

        value={{watchList: state.watchList, 
            watched: state.watched,
        addMovieToWatchedList,
        }}>
        {props.children}

        </GlobalContext.Provider>
    )
}