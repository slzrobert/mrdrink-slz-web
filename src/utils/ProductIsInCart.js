function ProductIsInCart(product, products){
    return products.some((p) => p.name === product.name);
}

export default ProductIsInCart;