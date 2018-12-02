import { Selector } from 'testcafe';

fixture `status`
    .page `http://localhost:3000/`;

test('New Test', async t => {
    await t
        .click(Selector('a').withText('STATUS'))
        .typeText(Selector('#idOrder'), '2dmg6JL6qTRmMFn3Vobv')
        .pressKey('enter');
});