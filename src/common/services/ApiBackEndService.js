class ApiBackEndService {

    constructor(httpClient) {
        this.httpClient = httpClient
    }

    async getUsers() {
        try {
            return await this.httpClient.get('/users')
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getProductsById(productId) {
        try {
            return await this.httpClient.get('/products?id='+ productId )
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getProductsByCategory(categoryId) {
        try {
            return await this.httpClient.get('/products?categoryId='+ categoryId )
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getCategories() {
        try {
            return await this.httpClient.get('/cartegories')
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export default ApiBackEndService