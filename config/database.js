const URL = 'https://us-central1-ninjadrink-25671.cloudfunctions.net/'

module.exports = {
    getList : URL + 'getAccountList',
    addAccount : URL + 'addAccount',
    login : URL + 'login',
    getAccountByUsername : URL + 'getAccountByUsername',
    getProductList : URL + 'getProductList',
    getCategory : URL + 'getCategory',
}