import { useState, useCallback } from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        console.log('http hook')
        console.log('url: ', url)
        console.log('method: ', method)
        console.log('body: ', body)
        console.log('headers: ', headers)
        setLoading(true)
        try {
            console.log(JSON.parse(JSON.stringify(body)))
            if (body) {
                body = JSON.stringify(body)
                headers['Content-type'] = 'application/json';
                /*headers['Access-Control-Allow-Origin']= 'http://localhost:3000';
                headers['Access-Control-Allow-Origin']='*';
                headers['Access-Control-Allow-Methods'] ='GET, POST, PATCH, PUT, DELETE, OPTIONS';
                headers['Access-Control-Allow-Headers']= 'Origin, Content-Type, X-Auth-Token';
                headers['Access-Control-Allow-Credentials']= 'true';*/
            }
            console.log('headers: ', headers)

            const response = await fetch(url, { method, body, headers })
            console.log('response: ', response)
            console.log(response.body);
            const data = await response.json()
            console.log('data: ', data)

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }
            
            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}