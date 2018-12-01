const Account = require('../class/account')
const account = new Account()

test('(Class: Account)Test get account list', async () => {
  const result = await account.getAccountList()
  console.log(result)
  expect(result.return_code).toMatch('200')
})

test('(Class: Account)Test add account to database', async () => {
  const data = {
    username: 'TestAccount1129Q810',
    email: 'varitisaboy11511@gmail.com',
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
    telephone: '21'
  }
  const result = await account.add(data)
  console.log(result)
  expect(result.return_code).toMatch('200')
}, 30000)

test('(Class: Account)Test login', async () => {
  const data = {
    username: 'TestAccount1129Q810',
    password: '1234'
  }
  const result = await account.login(data)
  console.log(result)
  expect(result.return_code).toMatch('200')
}, 30000)

test('(Class: Account)Test get account by username', async () => {
  const username = 'TestAccount1129Q810'
  const result = await account.getAccountBy(username)
  console.log(result)
  expect(result.return_code).toMatch('200')
}, 30000)

test('(Class: Account)Test remove account', async () => {
  const username = 'TestAccount1129Q810'
  const result = await account.remove(username)
  console.log(result)
  expect(result.return_code).toMatch('200')
}, 30000)

test('(Class: Account)Test Admin login', async () => {
  const data = {
    username: 'admin@ninja@varitclub',
    password: 'ninjavarit'
  }
  const result = await account.loginToAdmin(data)
  console.log(result)
  expect(result.return_code).toMatch('200')
}, 30000)
