const localStorageMiddleware = store => next => action => {
    const result = next(action); // action-u reducer-ə göndər
    const state = store.getState();

    localStorage.setItem('cartList', JSON.stringify(state.cartList.cartList));
    localStorage.setItem('wishList', JSON.stringify(state.wishList.wishList));

    return result;
};

export default localStorageMiddleware;
