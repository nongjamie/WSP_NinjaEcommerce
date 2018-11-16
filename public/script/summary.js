$( () => {

  // Initial setup in cart, personal, address, payment section.
  initialSetUp();

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

function initialSetUp() {

  // Table head row initial setup

  let headOfRow = [
    {
      id: "\'productSenc\'",
      class: "\'.pictureColumn\'",
      detail: "Product"
    },
    {
      id: "\'nameSenc\'",
      class: "\'.productNameColumn\'",
      detail: "Name"
    },
    {
      id: "\'quantitySenc\'",
      class: "\'.productQuantityColumn\'",
      detail: "Quality"
    },
    {
      id: "\'unitPriceSenc\'",
      class: "\'.productUnitPriceColumn\'",
      detail: "UnitPrice"
    },
    {
      id: "\'totalCostSenc\'",
      class: "\'.productTotalPriceColumn\'",
      detail: "TotalCost"
    }
  ];
  for(let j = 0 ; j <  ; j++ ) {
    $(headOfRow[j].class).append(`
      <div style="height: 50px; width: 100%;">
        <p id=${headOfRow[j].id} style="font-weight:bold;">
          ${headOfRow[j].detail}
        </p>
      </div>
    `);
  }

  // Table body initial setup.

  // Personal initial setup

  let personal = [ "Name", "Surname", "Birthday", "Sex" ];
  let personalCode = '<p>Personal</p>';
  for(let i = 0 ; i < personal.length ; i++) {
    personalCode = personalCode + `
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">${personal[i]}</span>
        <input type="number" class="form-control" placeholder="${personal[i]}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    `;
  }
  personalCode = personalCode + `</br>`;
  $('.summaryPersonal').html(personalCode);

  // Address initial setup

  let address = [ "Address", "Distrinct", "Province", "ZipCode", "Telephone" ];
  let addressCode = '<p>Address</p>';
  for(let i = 0 ; i < address.length ; i++) {
    addressCode = addressCode + `
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">${address[i]}</span>
        <input type="number" class="form-control" placeholder="${address[i]}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    `;
  }
  addressCode = addressCode + `</br>`;
  $('.summaryAppointment').html(addressCode);

  // Payment initial setup

  let payment = [
    {
      topic: "Customer name",
      detailForm: "Varit Assavavisidchai"
    },
    {
      topic: "Reference no.",
      detailForm: "1473857365977"
    },
    {
      topic: "Date",
      detailForm: "10-10-2010"
    },
    {
      topic: "Time",
      detailForm: "22.10"
    },
  ];
  let paymentCode = '<p>Payment</p>';
  for(let i = 0 ; i < payment.length ; i++) {
    paymentCode = paymentCode + `
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">${payment[i].topic}</span>
        <input type="number" class="form-control" placeholder="${payment[i].detailForm}" aria-label="Username" aria-describedby="basic-addon1" disabled>
      </div>
    </div>
    `;
  }
  paymentCode = paymentCode + `</br>`;
  $('.summaryPayment').html(paymentCode);

}
