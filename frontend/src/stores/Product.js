import { create } from "zustand";

const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    
    addProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success: false, message: "Please fill all the fields"}
        }
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        try {
            const data = await response.json();
            set((state) => ({ products: [...state.products, data.product] }));
            return {success: true, message: "Product added successfully"};
        } catch (error) {
            return {success: false, message: error};
        }
    },

    getProducts: async () => {
        const response = await fetch("/api/products");
        try {
            const data = await response.json();
            set((state) => ({ products: data.products }));
            return {success: true, message: "Products fetched successfully"};
        } catch (error) {
            return {success: false, message: error};
        }
    },

    deleteProduct: async (id) => {
        const response = await fetch(`/api/products/${id}`, {
            method: "DELETE",
        });
        try {
            const data = await response.json();
            set((state) => ({ products: state.products.filter((product) => product._id !== id) }));
            return {success: true, message: "Product deleted successfully"};
        } catch (error) {
            return {success: false, message: error};
        }
    },
}))

export default useProductStore
