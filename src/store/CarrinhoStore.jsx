import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist(
        (set) => ({    
            isOpen: false,
            products: [],
            addToCart: (product) => set((state) => {

                const productIsAlreadyInCart = state.products.some((prod) => prod.name === product.name);

                if(productIsAlreadyInCart){
                    return {
                        ...state,
                        products: state.products.map((prod) => (
                            prod.name === product.name
                            ? {...prod, quantity: prod.quantity + 1}
                            : prod
                        )),
                        isOpen: state.isOpen ? true : true
                    }
                }

                return {
                    products: [...state.products, {...product, quantity: 1 }],
                    isOpen: state.isOpen ? true : true
                }
            }),
            removeProductCart: (product) => set((state) => {

                const productIsAlreadyInCart = state.products.some((prod) => prod.name === product.name);

                if(!productIsAlreadyInCart){
                    return {...state};
                }

                return {
                    products: state.products.filter(prod => prod.name !== product.name ),
                    isOpen: state.isOpen ? true : true
                }
            }),
            increaseQuantityProduct: (product) => set((state) => {
                return {
                    ...state,
                    products: state.products.map((prod) => (
                        prod.name === product.name
                        ? {...prod, quantity: prod.quantity + 1}
                        : prod
                    ))
                }
            }),
            decreaseQuantityProduct: (product) => set((state) => {
                return {
                    ...state,
                    products: state.products
                    .map((prod) => (
                        prod.name === product.name && prod.quantity > 1
                        ? {...prod, quantity: prod.quantity - 1}
                        : prod
                    ))
                    .filter((prod) => prod.quantity > 0)
                }
            }),
            handleOpenClose: () => set((state) => {
                return {
                    isOpen: state.isOpen ? false : true,
                }
            }),
        }),
        {
            name: "cart-storage"
        }
    )
)
