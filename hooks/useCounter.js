import { useState } from 'react'

// el customHook es una funcion que se exporta y esta extrayendo la logica del contador
export const useCounter = ( initialState = 10 ) => {
    const [state, setState] = useState( initialState ) // 10 por defecto es 10
    
    const increment = (factor = 1) => {
        setState( state + factor)
    }
    const decrement = (factor = 1) => {
        setState( state - factor)
    }

    const reset = ()  => {
        setState( initialState )
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}



