// este es un custom hook que se encargara de los formularios.

import { useState } from "react"

export const useForm = ( initialState = {} ) => {   // porque un objeto vacio para que no reviente la aplicacion
     
    const [values, setValues] = useState( initialState )

    const handleInputChange = ( { target } ) => { 

        setValues({
            ...values,
            [ target.name ]: target.value    
        })
    }

    return [ values, handleInputChange ]

}


/*    funciona de la misma manera que arriba pero es mas dificil de entender
export const useForm2 = ( initialState = {} ) => {   
     
    const [values, setValues] = useState( initialState )

    return [ values, ( { target } ) => { 
        
        setValues({
            ...values,
            [ target.name ]: target.value    
        })
    } ]

}
*/
