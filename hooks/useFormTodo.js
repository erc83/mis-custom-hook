// este es un custom hook que se encargara de los formularios.
import { useState } from "react"


export const useFormTodo = ( initialState = {} ) => {   // porque un objeto vacio para que no reviente la aplicacion
     
    const [values, setValues] = useState( initialState )

    const reset = () => {                      // se crea esta funcion para resetear el campo del input una vez se ejecute la accion
        setValues( initialState );
    }

    const handleInputChange = ( { target } ) => { 

        setValues({
            ...values, [ target.name ]: target.value    
        })
    }
    return [ values, handleInputChange, reset ]  // aqui regresa el valor como un arreglo el primer valor es el estado del formulario
                                        // el 2do es el handleInputChange para cambiar los valores del formulario
}

