import { Selector } from 'testcafe';
import { TSExternalModuleReference } from 'babel-types';

fixture `Getting Started`
    .page `http://localhost:3000/login`;

// test( 'My first test', async t => {
//     // Test code
//     await t 
//         .click('#mycart')
// });

// login test
test( 'login test', async t => {
    await t
        .typeText('#username', 'kong')
        .typeText('#password', 'sathira')
        .click('#submit-button');
});

