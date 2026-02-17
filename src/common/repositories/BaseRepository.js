import axios from "axios";

class BaseRepository {

    constructor(protocol = 'http', domain = "localhost", port = 8080){
        
        this.baseUrl = `${protocol}://${domain}`;

        if( /^\d+$/.test(port) ) {
            this.baseUrl = `${this.baseUrl}:${port}`;
        }

        this.httpClient = axios.create();
    }

    get(path = '', requestParams = {}, headerContentType = ''){
        return this.httpClient.get(`${this.baseUrl}${path}`,
            {
                params: requestParams && requestParams.params ? requestParams.params : {},
                headers: this.getHeader(headerContentType)
            }
        );
    }

    post({
        path = '',
        requestParams = {},
        data = null,
        headerContentType = '',
        shouldHaveEmptyBody = false
    }){
        const requestData = shouldHaveEmptyBody ? {} : data;
        return this.httpClient.post(`${this.baseUrl}${path}`,
            requestData,
            {
                params: requestParams && requestParams.params ? requestParams.params : {},
                headers: this.getHeader(headerContentType)
            }
        )
    }

    put(path = '', data = {}){
        return this.httpClient.put(`${this.baseUrl}${path}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    patch(path = '', data = {}){
        return this.httpClient.patch(`${this.baseUrl}${path}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    delete(path = '', id = null){
        return this.httpClient.delete(`${this.baseUrl}${path}${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    async getAsync(path = '', requestParams = {}, headerContentType = ''){
        return await this.httpClient.get(`${this.baseUrl}${path}`,
            {
                params: requestParams && requestParams.params ? requestParams.params : {},
                headers: this.getHeader(headerContentType)
            }
        );
    }

    async postAsync({
        path = '',
        data = {},
        requestParams = {},
        requestHeader = {},
    }){
        return await this.httpClient.post(
            `${this.baseUrl}${path}`,
            data,
            {
                params: requestParams,
                headers: requestHeader
            }
        )
    }

    async putAsync(path = '', data = {}){
        return await this.httpClient.put(`${this.baseUrl}${path}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async patchAsync(path = '', data = {}){
        return await this.httpClient.patch(`${this.baseUrl}${path}`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async deleteAsync(path = '', id = null){
        return await this.httpClient.delete(`${this.baseUrl}${path}${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    getInstanceHttpClient() {
        return this.httpClient;
    }

    getHeader(contentType = '') {
        const header = {
            'Content-Type': (contentType === '' ? 'application/json' : contentType)
        }

        return { ...header }
    }
}

export default BaseRepository