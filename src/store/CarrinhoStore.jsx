import { create } from "zustand";
import { persist } from "zustand/middleware";
import ProductIsInCart from "../utils/ProductIsInCart";

const initialState = {
    isOpen: false,
    products: [],
}

export const useCartStore = create(
    persist(
        (set, get) => ({    
            ...initialState,
            productIsAlreadyInCart: (product) => {
                return get().products.some((prod) => prod.name === product.name);
            },
            addToCart: (product) => set((state) => {

                let productIsInCart = ProductIsInCart(product, state.products);

                if ( productIsInCart ) {
                    return {
                        products: state.products.map((prod) => (
                            prod.name === product.name
                            ? {...prod, quantity: prod.quantity + 1}
                            : prod
                        )),
                        isOpen: true
                    }
                }

                return {
                    products: [...state.products, {...product, quantity: 1}],
                    isOpen: true
                }
            }),
            removeProductCart: (product) => set((state) => {

                let productIsInCart = ProductIsInCart(product, state.products);

                if ( productIsInCart ) {
                    return { products: state.products.filter(prod => prod.name !== product.name ) }
                }

                return state;
            }),
            increaseQuantityProduct: (product) => set((state) => {
                return {
                    products: state.products
                    .map((prod) => (
                        prod.name === product.name
                        ? {...prod, quantity: prod.quantity + 1}
                        : prod
                    ))
                }
            }),
            decreaseQuantityProduct: (product) => set((state) => {
                return {
                    products: state.products
                    .map((prod) => (
                        prod.name === product.name && prod.quantity > 1
                        ? {...prod, quantity: prod.quantity - 1}
                        : prod
                    ))
                    .filter((prod) => ( prod.quantity > 0 ))
                }
            }),
            updateQuantityProduct: (product, quantity) => set((state) => {

                let qtd = (/^\d+$/.test(quantity)) ? Number(quantity) : 0;

                return  {
                    products: state.products
                    .map((prod) => (
                        prod.name === product.name && qtd > 0
                        ? {...prod, quantity: qtd}
                        : {...prod, quantity: 0}
                    ))
                }
            }),
            handleOpenClose: () => set((state) => {
                return {
                    isOpen: state.isOpen ? false : true,
                }
            }),
            removeAllProductsCart: () => set({...initialState, isOpen: true})
        }),
        {
            name: "cart-storage"
        }
    )
)
