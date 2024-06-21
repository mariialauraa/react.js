import { useReducer, useEffect } from "react";
import axios from "axios";


// cria o Reducer com suas ações
const httpReducer = (state, action) => {
    switch(action.type) {
        case "SEND":
            return {data: null, error: null, loading: true}
        case "SUCCESS":   
            return {data: action.responseData, error: null, loading: false}     
        case "ERROR":
            return {data: null, error: action.errorMessage, loading: false}
        default:
            return state
    }
}

// Custom Hook - fazer a requisição
const useHttp = (url, method = "GET", body = null, dependencies = []) => {
    const [httpState, dispatch] = useReducer(httpReducer, {
        // dados iniciais
        data: null, 
        error: null,
        loading: false
    })

    useEffect(() => {
        const fetchData = async() => {
            dispatch({ type: "SEND" })

            try {
                const response = await axios({ url, method, data: body })
                dispatch({ type: "SUCCESS", responseData: response.data })
                
            } catch (error) {
                dispatch({ type: "ERROR", errorMessage: "Algo deu errado!" })
            }
        }
        // executa a função
        fetchData()
    }, dependencies) //=[]

    return httpState // para poder fazer o uso do hook
}

export default useHttp
