$( () => {

  // Cofirm button clicked.
  $('#yesButton').click( () => {
    console.log('Go to summary page.');
    const username = $('#userNavBarUsername').text()
    window.location = "http://localhost:3000/summary/"+username;
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    const username = $('#userNavBarUsername').text()
    console.log('Cancel the payment, go back to appointment page.');
    window.location = "http://localhost:3000/myappointment/"+username;
  });

  $(".masterCardWay").click( () => {
    $(".paymentFieldInputSentence").html(`
      <p>Step 2 : Fill the details of your credit card.</p>
      `);
    $(".paymentFieldInput").html(`
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Card Holder's Name</span>
          <input type="number" class="form-control" placeholder="Card Holder's Name" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Credit Card number</span>
          <input type="text" class="form-control" placeholder="Credit Card number" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Expiration date</span>
          <input type="text" class="form-control" placeholder="Expiration date" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Card security code</span>
          <input type="text" class="form-control" placeholder="Card security code" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
      `);
      $(".paymentFieldUpload").html(`
        Need not to upload.
        `);
  });

  $(".scbWay").click( () => {
    $(".paymentFieldInputSentence").html(`
      <p>Step 2 : Pay by the mobile banking.</p>
      `);
    $(".paymentFieldInput").html(`
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Bank</span>
          <input type="number" class="form-control" placeholder="Siam Commercial Bank" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Account's name</span>
          <input type="text" class="form-control" placeholder="Varit Assavavisidchai" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Account's type</span>
          <input type="text" class="form-control" placeholder="Saving account" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Branch</span>
          <input type="text" class="form-control" placeholder="Bangkok" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Acc. No.</span>
          <input type="text" class="form-control" placeholder="591-0-54583-3" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
      </div>
      `);
      $(".paymentFieldUploadSentence").html(`
        <p>Step 3 : Upload the slip here.</p>
        `);
      $(".paymentFieldUpload").html(`
        <input type="file" /> <button type="button" class="btn btn-primary">Upload</button>
        `);
  });

  $(".kbankWay").click( () => {
    $(".paymentFieldInputSentence").html(`
      <p>Step 2 : Pay by the mobile banking.</p>
      `);
    $(".paymentFieldInput").html(`
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Bank</span>
          <input type="number" class="form-control" placeholder="Kasikorn Bank" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Account's name</span>
          <input type="text" class="form-control" placeholder="Varit Assavavisidchai" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Account's type</span>
          <input type="text" class="form-control" placeholder="Saving account" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Branch</span>
          <input type="text" class="form-control" placeholder="Bangkok" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Acc. No.</span>
          <input type="text" class="form-control" placeholder="591-0-54561-3" aria-label="Username" aria-describedby="basic-addon1" disabled>
        </div>
      </div>
      `);
      $(".paymentFieldUploadSentence").html(`
        <p>Step 3 : Upload the slip here.</p>
        `);
      $(".paymentFieldUpload").html(`
        <input type="file" />
        <button type="button" class="btn btn-primary">Upload</button>
        `);
  });

  //fame part
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
        window.alert('Thank you for your purchase!');
      });
    }
  }, '#paypal-button');

} );
