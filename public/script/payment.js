$( () => {

  // Cofirm button clicked.
  $('#yesButton').click( () => {
    let control = checkInputField();
    if( control == 0) {
      alert('Please complete the fill in step3.');
    }
    else {
      console.log('Go to summary page.');
      const username = $('#userNavBarUsername').text()
      window.location = "http://localhost:3000/summary/"+username;
    }
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    const username = $('#userNavBarUsername').text()
    console.log('Cancel the payment, go back to appointment page.');
    window.location = "http://localhost:3000/myappointment/"+username;
  });

  // Pay with SCB
  $(".scbWay").click( function action() {
    payBySCB()
  } );

  // Pay with KBank
  $(".kbankWay").click( function action() {
    payByKBank()
  });

  // Fame part, Pay with Paypal
  paypal.Button.render({
    // Configure environment
    env: 'sandbox',
    client: {
      sandbox: 'demo_sandbox_client_id',
      production: 'demo_production_client_id'
    },
    // Customize button (optional)
    locale: 'en_US',
    style: {
      size: 'medium',
      color: 'black',
      shape: 'pill',
    },
    // Set up a payment
    payment: function(data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: '0.01',
            currency: 'USD'
          }
        }]
      });
    },
    // Execute the payment
    onAuthorize: function(data, actions) {
      return actions.payment.execute().then(function() {
        // Show a confirmation message to the buyer
        const username = $('#userNavBarUsername').text()
        $('.loading').css({
          'display': 'block',
          'z-index': '999 !important',
        })
        console.log('summary.js ok button clicked !!!!!!!')
        $.ajax({
          url: '/completeTransaction/' + username,
          data: {
            'username': username,
          },
          type: 'GET',
          success: function (data) {
            if (data.return_code === '400') {
              console.log('error')
            } else {
              console.log('summary.js responsed !!!!!!!!')
              window.location.href = '/completeTransaction/' + username
            }
          },
          error: function (error) {
            console.log('error check out')
          }
        })
        window.alert('Thank you for your purchase!');
      });
    }
  }, '#paypal-button');

} );

function checkInputField() {
  let name = $('#inputName').val();
  let date = $('#inputDate').val();
  let time = $('#inputTime').val();
  let amount = $('#inputAmount').val();
  let accNo = $('#inputAccNo').val();
  let transNo = $('#inputTransactionNo').val();
  if( (name !== "") && (date !== "") && (time !== "") && (amount !== "") && (accNo !== "") && (transNo !== "") ) {
    return 1;
  }
  return 0;
}

function textInStep2() {
  $(".paymentFieldInputSentence").html(`
    <p>Step 2 : Pay by the mobile banking to these info.</p>
  `);
}

function paymentFileUpload(num) {
  let verifyExampleID = ["inputName", "inputDate", "inputTime", "inputAmount", "inputAccNo", "inputTransactionNo"];
  let verifyExampleTopic = [ "Name", "Date", "Time", "Amount(฿)", "Acc. no.", "Transaction no." ];
  let verifyExamplePlaceHolder = [ "Varit Assavavisidchai", "11 November 2018", "22.53", "5,000", "123-4-56789-0", "340255905521903810" ];
  if(num == 0) {
    $(".paymentFieldUploadSentence").html(`<p>Step 3 : Verify your transaction.</p>`);
    $(".paymentFieldUpload").html(`<p>No need to upload of fill anything.</p>`);
  }
  else {
    $(".paymentFieldUploadSentence").html(`
      <p>Step 3 : Verify your transaction.</p>
    `);
    let ans = ``;
    ans = ans + `
      <div class="input-group mb-3">
    `;
    for(let i = 0 ; i < verifyExampleTopic.length ; i++) {
      ans = ans + `
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">${verifyExampleTopic[i]}</span>
          <input id="${verifyExampleID[i]}" type="text" class="form-control" placeholder=\"${verifyExamplePlaceHolder[i]}\" aria-label="Username" aria-describedby="basic-addon1" >
        </div>
      `;
    }
    ans = ans + `</div>`;
    $(".paymentFieldUpload").html(`${ans}`);
  }
};

function payBySCB() {
  let payExampleTopic = [ "Bank", "Account's name", "Account's type", "Branch", "Acc. no." ];
  let payExamplePlaceHolder = [ "Siam Commercial Bank", "Varit Assavavisidchai", "Saving account", "Bangkok", "591-0-54583-3" ];
  textInStep2();
  let ans = ``;
  ans = ans + `
    <div class="input-group mb-3">
  `;
  for(let i = 0 ; i < payExampleTopic.length ; i++) {
    ans = ans + `
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">${payExampleTopic[i]}</span>
        <input type="text" class="form-control" placeholder=\"${payExamplePlaceHolder[i]}\" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    `;
  }
  ans = ans + `</div>`;
  $(".paymentFieldInput").html(`${ans}`);
  paymentFileUpload(1);
}

function payByKBank() {
  let payExampleTopic = [ "Bank", "Account's name", "Account's type", "Branch", "Acc. no." ];
  let payExamplePlaceHolder = [ "Kasikorn Bank", "Varit Assavavisidchai", "Saving account", "Bangkok", "891-0-11121-0" ];
  textInStep2();
  let ans = ``;
  ans = ans + `
    <div class="input-group mb-3">
  `;
  for(let i = 0 ; i < payExampleTopic.length ; i++) {
    ans = ans + `
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">${payExampleTopic[i]}</span>
        <input type="text" class="form-control" placeholder=\"${payExamplePlaceHolder[i]}\" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    `;
  }
  ans = ans + `</div>`;
  $(".paymentFieldInput").html(`${ans}`);
  paymentFileUpload(1);
}
