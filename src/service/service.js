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
        console.log('NavigationsLinks-de xeta: ' + error)
    }
}
async function footerLinks() {
    try {
        const res = await axiosInstance.get("/Footer");
        return res.data
    }
    catch (error) {
        console.log("FooterLinks-de xeta: " + error)
    }
}
async function countryLinks() {
    try {
        const res = await axiosInstance.get("/Countries");
        return res.data
    }
    catch (error) {
        console.log("CountryLinks-de xeta: " + error)
    }
}

export { getLinks, classicsData, navigationsLinks, footerLinks, countryLinks };
