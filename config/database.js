const URL = 'https://us-central1-ninjadrink-25671.cloudfunctions.net/'

module.exports = {
    getList : URL + 'getAccountList',
    addAccount : URL + 'addAccount',
    login : URL + 'login',
    getAccountByUsername : URL + 'getAccountByUsername',
    getProductListByCategoryname : URL + 'getProductListByCategoryname',
    addProductToCartByUsername : URL +'addProductToCartByUsername',
    checkoutByUsername:URL+'checkoutByUsername',
    getCartByUsername : URL + 'getCartByUsername',
    removeProductFromCart : URL + 'removeProductFromCart',
    addFeedback : URL + 'addFeedback',
    getFeedbacks : URL + 'getFeedbackList'
}