import { useEffect, useRef, useState } from "react"

export const useFetchRef = ( url ) => {

    const isMounted = useRef(false);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    // console.log(isMounted.current)

    useEffect( () => {

        return () => {
            
            isMounted.current = true;
            
        }
    }, []) 
    
    useEffect(() => {
        
        setState({ data:null , loading: true, error: null })      // se agrega esta linea de codigo para cargar constantemente el loading al llamar otro componente

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

               setTimeout(()=> { 
                    if( isMounted.current ){  // si esta true todavia lo puedo llamar en caso contrario no hace nada
                        setState({
                            loading: false,
                            error: null,       
                            data
                        });
                     }else{
                        console.log("setState no se llamo")
                    }
                }, 4000 ); 
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })
    }, [url])
    return state              
}