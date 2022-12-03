import { useState } from 'react'

// el customHook es una funcion que se exporta y esta extrayendo la logica del contador
export const useCounterQuote = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState( initialState ) // 10 por defecto es 10
    
    const increment = () => {
        setCounter( counter + 1 )
    }
    
    const decrement = ( ) => {
        setCounter( counter - 1)
    }

    const reset = ()  => {
        setCounter( initialState )
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}



