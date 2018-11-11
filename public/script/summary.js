$( () => {

  let exampleCart = [
    { productID: '4JbTehkukn42UPXr0H9c',
      productName: 'Red_label (1.0 Liter)',
      quantity: '1',
      productPrice: 899 },
    { productID: '65ROqAYqoDhHx0YYA6iX',
      productName: 'Singha',
      quantity: '1',
      productPrice: 36 },
    { productPrice: 35,
      productID: 'K0wrg0WgKIzZYCqSrkqg',
      productName: 'Leo',
      quantity: 3 }
  ];

  let exampleAppointment = {
    name: "Varit",
    surname: "Assavavisidchai",
    birthday: "1-Jan-1998",
    sex: "Male",
    address: "Bangkok",
    distrinct: "Bangkok",
    province: "Bangkok",
    zipCode: "10190",
    telephone: "0918548372"
  };

  let exampleCreditcard = {
    cardHolderName: "Varit Assavavisidchai",
    creditCardNumber: "1234-5678-9012-3456",
    expirationDate: "12/2020",
    cardSecurityCode: "5833"
  };

  let styleHeadColumnCart = "style=\"height: 50px; width: 100%;\"";

  // Set the head of row
  $('.pictureColumn').append(`
    <div ${styleHeadColumnCart}>
      <p id="productSenc" style="font-weight:bold;">
        Product
      </p>
    </div>
    `);
  $('.productNameColumn').append(`
    <div ${styleHeadColumnCart}>
      <p id="nameSenc" style="font-weight:bold;">
        Name
      </p>
    </div>
    `);
  $('.productQuantityColumn').append(`
    <div ${styleHeadColumnCart}>
      <p id="quantitySenc" style="font-weight:bold;">
        Quantity
      </p>
    </div>
    `);
  $('.productUnitPriceColumn').append(`
    <div ${styleHeadColumnCart}>
      <p id="unitPriceSenc" style="font-weight:bold;">
        UnitPrice
      </p>
    </div>
    `);
  $('.productTotalPriceColumn').append(`
    <div ${styleHeadColumnCart}>
      <p id="totalCostSenc" style="font-weight:bold;">
        TotalCost
      </p>
    </div>
    `);

  // Set the detail of each row
  for(let i = 0 ; i < exampleCart.length ; i++) {
    let item = exampleCart[i];
    let cost = item.quantity * item.productPrice;
    $('.pictureColumn').append(`
      <div>
        <img src="/pictures/${item.productID}_${item.productName}.jpg">
      </div>
      `);
    $('.productNameColumn').append(`
      <div>
        <p id="nameSenc">${item.productName}</p>
      </div>
      `);
    $('.productQuantityColumn').append(`
      <div>
        <p id="quantitySenc">${item.quantity}</p>
      </div>
      `);
    $('.productUnitPriceColumn').append(`
      <div>
        <p id="unitPriceSenc">${item.productPrice}</p>
      </div>
      `);
    $('.productTotalPriceColumn').append(`
      <div>
        <p id="totalCostSenc">${cost}</p>
      </div>
      `);
  }

  $('.summaryPersonal').html(`
    <p>Personal</p>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Name</span>
        <input type="number" class="form-control" placeholder="${exampleCreditcard.cardHolderName}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Surname</span>
        <input type="number" class="form-control" placeholder="${exampleCreditcard.creditCardNumber}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Birthday</span>
        <input type="number" class="form-control" placeholder="${exampleCreditcard.expirationDate}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Sex</span>
        <input type="number" class="form-control" placeholder="${exampleCreditcard.cardSecurityCode}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    </br>
  `);

  // Set the detail of appointment
  $('.summaryAppointment').html(`
    <p>Address</p>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Address</span>
        <input type="number" class="form-control" placeholder="${exampleAppointment.address}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Distrinct</span>
        <input type="number" class="form-control" placeholder="${exampleAppointment.distrinct}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Province</span>
        <input type="number" class="form-control" placeholder="${exampleAppointment.province}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">ZipCode</span>
        <input type="number" class="form-control" placeholder="${exampleAppointment.zipCode}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Telephone</span>
        <input type="number" class="form-control" placeholder="${exampleAppointment.telephone}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
  `);

  $('.summaryPayment').html(`
    <p>Payment</p>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Card holder's name</span>
        <input type="number" class="form-control" placeholder="${exampleCreditcard.cardHolderName}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Credit card number</span>
        <input type="number" class="form-control" placeholder="${exampleCreditcard.creditCardNumber}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Expiration date</span>
        <input type="number" class="form-control" placeholder="${exampleCreditcard.expirationDate}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Card security code</span>
        <input type="number" class="form-control" placeholder="${exampleCreditcard.cardSecurityCode}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    </br>
  `);

  // Cofirm button clicked.
  $('#yesButton').click( () => {
    const username = $('#userNavBarUsername').text()
    console.log('Go to summary page.');
    window.location = "http://localhost:3000/completeTransaction/"+username;
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    const username = $('#userNavBarUsername').text()
    console.log('Cancel the payment, go back to payment page.');
    window.location = "http://localhost:3000/mypayment/"+username;
  });

  // $('#confirm').on('click', function(e){
  //     const username = $('#userNavBarUsername').text()
  //     $.ajax({
  //         url: '/summary/'+username,
  //         data:{
  //             'username': username,
  //         },
  //         type: 'POST',
  //         success: function(data) {
  //             if(data.return_code === '400'){
  //                 console.log('error')
  //             }else{
  //                 alert('success checkout');
  //                 window.location='http://localhost:3000/'
  //             }
  //         },
  //         error: function(error){
  //             console.log('error check out')
  //         }
  //     })
  // });

} );
