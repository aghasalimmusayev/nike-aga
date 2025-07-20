import axiosInstance from "./instance";
async function getLinks() {
    try {
        const res = await axiosInstance.get("/Navlinks");
        return res.data;
    } catch (error) {
        console.warn("Navlinks sorgusunda xeta: " + error);
    }
}
async function classicsData() {
    try {
        const res = await axiosInstance.get('/Classics');
        return res.data
    }
    catch (error) {
        console.warn('Classics sorgusunda xeta: ' + error)
    }
}
async function navigationsLinks() {
    try {
        const res = await axiosInstance.get('/Navigations');
        return res.data
    }
    catch (error) {
        console.warn('NavigationsLinks-de xeta: ' + error)
    }
}
async function footerLinks() {
    try {
        const res = await axiosInstance.get("/Footer");
        return res.data
    }
    catch (error) {
        console.warn("FooterLinks-de xeta: " + error)
    }
}
async function countryLinks() {
    try {
        const res = await axiosInstance.get("/Countries");
        return res.data
    }
    catch (error) {
        console.warn("CountryLinks-de xeta: " + error)
    }
}
async function products() {
    try {
        const res = await axiosInstance.get('/Products');
        return res.data
    }
    catch (error) {
        console.warn('Products sorgusunda xeta: ' + error)
    }
}
async function productById(id) {
    try {
        const res = await axiosInstance.get(`/Products/${id}`)
        return res.data
    }
    catch (error) {
        console.warn('Product by ID sorugusunda xeta: ' + error)
    }
}

export {
    getLinks,
    classicsData,
    navigationsLinks,
    footerLinks,
    countryLinks,
    products,
    productById
};
