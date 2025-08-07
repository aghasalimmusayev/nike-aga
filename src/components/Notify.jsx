import toast, { Toaster } from "react-hot-toast";
export const showAddSuccess = () => {
    toast.success('The new production added!', {
        duration: 3000,
        position: 'top-right',
    });
};
export const showUpdateSuccess = () => {
    toast.success('The production has been updated!', {
        duration: 3000,
        position: 'top-right',
    });
};
export const showDeleteSuccess = () => {
    toast.success('The production has been deleted!', {
        duration: 5000,
        position: 'top-center',
    });
};
export const showError = (message) => {
    toast.error(message || 'Something went wrong!', {
        duration: 4000,
        position: 'top-center',
    });
};
export const showRegSuccess = () => {
    toast.success('You have successfully registered!', {
        duration: 4000,
        position: 'top-center',
    });
}
export const showLogSuccess = () => {
    toast.success('You have entered in your page', {
        duration: 4000,
        position: 'top-center',
    });
}
export const showRegFailed = (message) => {
    toast.error(message || 'This email is already taken!', {
        duration: 5000,
        position: 'top-center',
    });
}
export const showAddToCart = () => {
    toast.success('Added to the ShoppingCart', {
        duration: 4000,
        position: 'top-right'
    });
}
export const paymentInfo = () => {
    toast.success('Your order has been completed', {
        duration: 5000,
        position: 'top-center'
    });
}

function Notify() {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: '#fff',
                    color: '#363636',
                    padding: '15px'
                },
                success: { iconTheme: { primary: '#4aed88', }, },
                error: { iconTheme: { primary: '#ff4b4b', }, },
            }}
        />
    );
}

export default Notify;