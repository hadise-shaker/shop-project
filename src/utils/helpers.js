// helper functions
export function featuredProducts(data) {
    return data.filter(item => {
        return item.category === "electronics"
    })
}


export function getCartFromLocalStorage() {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}