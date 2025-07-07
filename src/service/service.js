import axiosInstance from "./instance";

async function getLinks() {
    try {
        const res = await axiosInstance.get("/Navlinks");
        return res.data;
    } catch (error) {
        console.warn("Get metodunda xeta var: " + error);
    }
}

export { getLinks };
