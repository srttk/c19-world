import React, { createContext, useReducer } from 'react'


export interface IAppState {
    theme?: string
}
export const ACTIONS = {
    THEME_TOGGLE:"theme/toggle",
    THEME_SET:"theme/set"
}

export interface IAppContext {
    state:IAppState,
    dispatch?():void
}



export const AppContext = createContext({state:{theme:null}, dispatch: null})

function reducer(state, action ) {
    switch(action.type){
        case ACTIONS.THEME_TOGGLE:
            const nextTheme = state.theme==='dark' ? 'light':'dark'
            localStorage.setItem('theme', nextTheme)
            return {
                ...state,
                theme: nextTheme
            }
        case ACTIONS.THEME_SET:
            return {...state, theme: action.payload}
        default:
            return state
    }
}

export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer,{ theme:"light"})

    return (
        <AppContext.Provider value={{state, dispatch}}>
            { children }
        </AppContext.Provider>
    )
}


