# useCounter Hook
ejemplo de uso:
'''
    const {state, increment, decrement, reset } = useCounter(10); 
'''

useCounter() // recibe un valor por defecto


# useCountQuote Hook
ejemplo de uso:
'''
    const {counter, increment, decrement, reset } = useCounterQuote(10); 
'''

useCounterQuote() // recibe un valor por defecto

# useFetch
Ejemplo
'''
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);
'''

# useFetchRef 
Ejemplo
'''
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);
'''

# useForm
Ejemplo
'''
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    }
    const [ values, handleInputChange ] = useForm( initialForm );
'''

# useFormTodo
Ejemplo
'''
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    }
    const [ values, handleInputChange, reset ] = useFormTodo( initialForm );
'''



