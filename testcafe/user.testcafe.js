import { Selector } from 'testcafe';

fixture `user`
    .page `http://localhost:3000/`;

test('register', async t => {
    await t
        .click(Selector('a').withText('SIGN UP'))
        .typeText(Selector('#username'), 'mond12345')
        .typeText(Selector('#email'), 'mond12345@hotmail.com')
        .typeText(Selector('#signUpForm').find('[name="password"]'), 'mond')
        .typeText(Selector('#signUpForm').find('[name="confirmPassword"]'), 'mond')
        .typeText(Selector('#signUpForm').find('[name="name"]'), 'mond')
        .typeText(Selector('#signUpForm').find('[name="address"]'), 'qwe')
        .typeText(Selector('#signUpForm').find('[name="province"]'), 'qwe')
        .typeText(Selector('#signUpForm').find('[name="telephone"]'), 'qwe')
        .typeText(Selector('#signUpForm').find('[name="district"]'), 'qwe')
        .typeText(Selector('#signUpForm').find('[name="zipCode"]'), 'qwe')
        .click(Selector('.mt-5.btn.btn-danger.test'))
        .click(Selector('button').withText('OK'));
});

test('store', async t => {
    await t
        .click(Selector('li').withText('LOG IN').find('.nav-link.loadingClicked'))
        .click(Selector('li').withText('LOG IN').find('.nav-link.loadingClicked'))
        .typeText(Selector('#username'), 'jamie')
        .typeText(Selector('#password'), '1234')
        .click(Selector('.btn.btn-primary.loadingClicked'))
        .click(Selector('a').withText('STORE'))
        .click(Selector('a').withText('Whisky'))
        .click(Selector('.product-border').find('button').withText('Add To Cart'))
        .click(Selector('#userNavBarCartIcon'))
        .click(Selector('#confirmCartButton'))
        .click(Selector('#yesButton'))
        .click(Selector('#confirmCartButton'))
        .click(Selector('#yesButton'))
        .click(Selector('#confirmCartButton'))
        .click(Selector('#yesButton'))
        .click(Selector('#confirmCartButton'))
        .click(Selector('#yesButton'))
        .click(Selector('#confirmCartButton'))
        .click(Selector('#yesButton'));
});

test('New Test');