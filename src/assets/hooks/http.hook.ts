import axios from "axios"
import { useCallback } from "react"

export const useHttp = () => {
    const request = useCallback ( async (url, 
                                        method='GET', 
                                        body=null, 
                                        headers= {}) => {
        try {
            if(body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';

                console.log(headers);
            }
            const response = await fetch(url, {method, body, headers, mode:"no-cors"})
            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.message)
            }

            return data;
        } catch (e: any) {
            console.log('catch e: \n', e.message);
            throw e;
        }
    }, [])

    return { request };
}