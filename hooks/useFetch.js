import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });
    useEffect(() => {
        
        setState({ data:null , loading: true, error: null })      // se agrega esta linea de codigo para cargar constantemente el loading al llamar otro componente

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                    setState({
                        loading: false,
                        error: null,       
                        data
                    })
            })
    }, [url])
    return state              
}