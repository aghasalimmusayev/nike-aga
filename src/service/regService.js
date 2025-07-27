import axiosInstance from "./instance";

async function registerUser(userData) {
    try {
        const userVarsa = await axiosInstance.get(`/Users?email=${userData.email}`)
        console.log("Email check:", userVarsa.data);
        if (userVarsa.data.length > 0) {
            return {
                success: false,
                message: "This email address is already in use!"
            }
        }
        const res = await axiosInstance.post('/Users', userData)
        return {
            success: true,
            message: 'You have successfully registered!',
            data: res.data
        }
    }
    catch (error) {
        console.log('Qeydiyyatda xeta: ' + error)
        return {
            success: false,
            message: 'Xeta bas verdi: ' + error.message
        }
    }
}

async function loginUser(user) {
    const res = await axiosInstance.get(`/Users?email=${user.email}&password=${user.password}`);
    if (!res.data.length) {
        throw new Error("email or your password is invalid");
    }
    return res.data[0];
}

export { registerUser, loginUser }