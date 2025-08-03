import axiosInstance from "./instance";

async function postNewProduct(newProduct) {
    try {
        const res = await axiosInstance.post('/Products', newProduct)
        return res
    }
    catch (error) {
        console.error('Post-da xeta:', error.response?.data || error.message);
        throw error;
    }
}
async function editProduct(id, editedProduct) {
    try {
        const res = axiosInstance.patch(`/Products/${id}`, editedProduct)
        return res.data
    }
    catch (error) {
        console.log('Edit-de xeta: ' + error.message)
        throw error
    }
}
async function delProduct(id) {
    try {
        const res = await axiosInstance.delete(`/Products/${id}`)
        return res.data
    }
    catch (error) {
        console.warn('Silmekde xeta: ' + error)
        throw error
    }
}


export { postNewProduct, editProduct, delProduct }