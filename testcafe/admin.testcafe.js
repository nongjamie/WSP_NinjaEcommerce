import { Selector } from 'testcafe';

fixture `admin`
    .page `http://localhost:3000`;

test('New Test', async t => {
    await t
        .click(Selector('a').withText('LOG IN'))
        .typeText(Selector('#username'), 'admin@ninja@varitclub')
        .typeText(Selector('#password'), 'ninjavarit')
        .click(Selector('.btn.btn-primary.loadingClicked'))
    await t
        .navigateTo('http://localhost:3000/admin')
        // .click(Selector('.m-3').a.myCard(href="/admin/user/nokyung").find('button').withText('Delete'))
        // .click(Selector('span').withText('Logout').find('.navLink'))
});