import { Selector } from 'testcafe'

fixture`user`.page`https://ninja-ecommerce.herokuapp.com/`

test('register', async t => {
  await t
    .setNativeDialogHandler(() => true)
    .click(Selector('a').withText('SIGN UP'))
    .typeText(Selector('#username'), 'mond123451')
    .typeText(Selector('#email'), 'mond123451@hotmail.com')
    .typeText(Selector('#signUpForm').find('[name="password"]'), 'mond')
    .typeText(Selector('#signUpForm').find('[name="confirmPassword"]'), 'mond')
    .typeText(Selector('#signUpForm').find('[name="name"]'), 'mond')
    .typeText(Selector('#signUpForm').find('[name="address"]'), 'qwe')
    .typeText(Selector('#signUpForm').find('[name="province"]'), 'qwe')
    .typeText(Selector('#signUpForm').find('[name="telephone"]'), 'qwe')
    .typeText(Selector('#signUpForm').find('[name="district"]'), 'qwe')
    .typeText(Selector('#signUpForm').find('[name="zipCode"]'), 'qwe')
    .click(Selector('.mt-5.btn.btn-danger.test'))
    .click(Selector('button').withText('OK'))
})

test('search', async t => {
  await t
    .typeText(Selector('#searchinput'), '123456789')
    .click(Selector('#searchbutton'))
    .typeText(Selector('#searchinput'), 'cola')
    .click(Selector('#searchbutton'))
    .typeText(Selector('#searchinput'), 'whisky')
    .click(Selector('#searchbutton'))
})

test('feedback', async t => {
  await t
    .setNativeDialogHandler(() => true)
    .click(Selector('div').withText('Feedback'))
    .typeText(Selector('#feedbackForm').find('[name="name"]'), 'Sathira')
    .typeText(Selector('.mb-2.form-control[name="feedback"]'), 'I love this website. 10000000000000000 points for this web.')
    .click(Selector('[class^="btn btn-primary d-inline-block feedbackSummitButto"]'))
})

test('check out', async t => {
  await t
    .setNativeDialogHandler(() => true)
    .click(Selector('a').withText('LOG IN'))
    .typeText(Selector('#username'), 'jamie')
    .typeText(Selector('#password'), '1234')
    .click(Selector('.btn.btn-primary.loadingClicked'))
    .click(Selector('a').withText('STORE'))
    .click(Selector('a').withText('Whisky'))
    // .click(Selector('a').withText('Whisky'))
    .click(
      Selector('.product-border')
        .nth(1)
        .find('button')
        .withText('Add To Cart')
    )
    .click(Selector('#userNavBarCartIcon'))
    .click(Selector('#userNavBarCartIcon'))
    .click(Selector('#userNavBarCartIcon'))
    .click(Selector('#confirmCartButton'))
    .click(Selector('#yesButton'))
    .click(Selector('#confirmCartButton'))
    .click(Selector('#yesButton'))
    .click(Selector('.kbankWay'))
    .typeText(Selector('#inputName'), 'sathira')
    .typeText(Selector('#inputDate'), '11 November 2018')
    .typeText(Selector('#inputTime'), '22.53')
    .typeText(Selector('#inputAmount'), '100000')
    .typeText(Selector('#inputAccNo'), '123-123-1234')
    .typeText(Selector('#inputTransactionNo'), '1234145234243')
    .click(Selector('#confirmCartButton'))
    .click(Selector('#yesButton'))
    .click(Selector('#confirmCartButton'))
    .click(Selector('#yesButton'))
    .drag(Selector('.orderNumberDisplay'), -276, 1, {
      offsetX: 581,
      offsetY: 31
    })
    .click(Selector('#confirmCartButton'))
    .click(Selector('#yesButton'))
})

test('status', async t => {
  await t
    .click(Selector('a').withText('STATUS'))
    .typeText(Selector('#idOrder'), '2dmg6JL6qTRmMFn3Vobv')
    .pressKey('enter')
})
