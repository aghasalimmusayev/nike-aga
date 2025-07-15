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

export { getLinks, classicsData };
