$(() => {

  // Initial setup in cart, personal, address, payment section.
  initialSetUp();

  // Cofirm button clicked.
  $('#yesButton').click(() => {
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
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click(() => {
    const username = $('#userNavBarUsername').text()
    console.log('Cancel the payment, go back to payment page.');
    window.location = "/mypayment/" + username;
  });

  // $('#confirm').on('click', function(e){
  //     const username = $('#userNavBarUsername').text()
  // $.ajax({
  //     url: '/summary/'+username,
  //     data:{
  //         'username': username,
  //     },
  //     type: 'POST',
  //     success: function(data) {
  //         if(data.return_code === '400'){
  //             console.log('error')
  //         }else{
  //             alert('success checkout');
  //             window.location='http://localhost:3000/'
  //         }
  //     },
  //     error: function(error){
  //         console.log('error check out')
  //     }
  // })
  // });

});

function initialSetUp() {

  // Payment initial setup

  let payment = [
    {
      topic: "Customer name",
      detailForm: "Varit Ass"
    },
    {
      topic: "Date",
      detailForm: "4 December 2018"
    },
    {
      topic: "Time",
      detailForm: "13.45"
    },
    {
      topic: "Amount(฿)",
      detailForm: "10,000"
    },
    {
      topic: "Acc.No.",
      detailForm: "123-4-56789-0"
    },
    {
      topic: "Trans.No.",
      detailForm: "123456789012345678"
    }
  ];
  let paymentCode = '<p>Payment</p>';
  for (let i = 0; i < payment.length; i++) {
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
