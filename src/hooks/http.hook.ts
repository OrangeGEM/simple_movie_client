import axios from "axios";
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
            }

            //const response = await fetch(url, {method, body, headers})
            const response = await axios({
                url: url,
                method: method,
                data: body,
                headers: headers
            }).catch(error => {
                throw new Error(error);
            })
            
            return response.data;
        } catch (e: any) {
            throw e;
        }
    }, [])

    return { request };
}