import { Selector } from 'testcafe';

fixture `feedback`
    .page `http://localhost:3000/`;

test('New Test', async t => {
    await t.setNativeDialogHandler(() => true)
        .click(Selector('label').withText('Feedback'))
        .typeText(Selector('#feedbackForm').find('[name="name"]'), 'jamie')
        .typeText(Selector('.mb-2.form-control[name="feedback"]'), 'kuyddfdf')
        .click(Selector('[class^="btn btn-primary d-inline-block feedbackSummitButto"]'));
});