const Account = require('../class/account')
const account = new Account()

test('(Class: Account)Test get account list', async () => {
    const result = await account.getAccountList();
    expect(result.return_code).toMatch('200');
});

test('(Class: Account)Test add account to database', async () => {
    const data = {
        username: 'varitisaman44',
        email: 'varitisaboy44@gmail.com',
        password: '1234',
        confirmPassword: '1234',
        name: 'totsapon menkul',
        gender: 'male',
        day: '1',
        month: 'January',
        year: '1951',
        address: 'bangkok thailand',
        province: 'Bangkok',
        district: '',
        zipCode: '11000',
        telephone: '21' }
    const result = await account.add(data)
    expect(result.return_code).toMatch('200');
})

test('(Class: Account)Test login', async () => {
    const data = {
        username: 'testtotsapon',
        password: '1234'
    }
    const result = await account.login(data)
    expect(result.return_code).toMatch('200');
})

test('(Class: Account)Test get account by username', async() => {
    const username = 'trimid'
    const result = await account.getAccountBy(username)
    expect(result.return_code).toMatch('200');
})

// test('(Class: Account)Test remove account', async () => {

// })