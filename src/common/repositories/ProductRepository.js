import BaseRepository from "./BaseRepository"

class ProductRepository extends BaseRepository{

    constructor(httpClient){
        super(httpClient);
    }

    async get(id){
        return await this.constructor.get(id);
    }
}

export default ProductRepository