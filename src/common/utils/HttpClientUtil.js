import axios from 'axios'

class HttpClientUtil {

    constructor(){
        this.httpClient = axios.create({
            baseURL: 'https://fake-json-api.mock.beeceptor.com',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        })
    }

    async get(url){
        return await this.httpClient.get(url)
    }

    async post(url, body){
        return await this.httpClient.post(url, body)
    }

}

export default HttpClientUtil