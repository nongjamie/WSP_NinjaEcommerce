import { Selector } from 'testcafe';

// const someRole = Role('http://localhost:3000/', async t => {
//     // do some actions
// }, { preserveUrl: true });

fixture `user`
    // .disablePageReloads 
    // .beforeEach(async t => {
    //     await t.useRole(someRole);
    // });
    .page `http://localhost:3000/`;

test('register', async t => {
    await t.setNativeDialogHandler(() => true)
        .click(Selector('a').withText('SIGN UP'))
        .typeText(Selector('#username'), 'mond12346')
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

test('search', async t => {
    await t
        .typeText(Selector('#searchinput'), '123456789')
        .click(Selector('#searchbutton'))
        .typeText(Selector('#searchinput'), 'cola')
        .click(Selector('#searchbutton'))
        .typeText(Selector('#searchinput'), 'whisky')
        .click(Selector('#searchbutton'));
});

test('feedback', async t => {
    await t.setNativeDialogHandler(() => true)
        .click(Selector('div').withText('Feedback'))
        .typeText(Selector('#feedbackForm').find('[name="name"]'), 'Sathira')
        .typeText(Selector('.mb-2.form-control[name="feedback"]'), 'I love this website. 10000000000000000 points for this web.')
        .click(Selector('[class^="btn btn-primary d-inline-block feedbackSummitButto"]'));
});