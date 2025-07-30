import axiosInstance from "./instance";

async function sellProduct(id, updatedData) {
    try {
        const res = await axiosInstance.patch(`/Products/${id}`, updatedData)
        return res.data
    }
    catch (error) {
        console.warn('Satisda xeta: ' + error)
    }
}

export { sellProduct }