$(function () {

  // Cofirm button clicked.
  $('#yesButton').click( () => {
    console.log('Go to payment page.');
    const username = $('#userNavBarUsername').text()
    window.location = "http://localhost:3000/mypayment/"+username;
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    const username = $('#userNavBarUsername').text()
    console.log('Cancel the appointment, go back to my cart page.');
    window.location = "http://localhost:3000/mycart/"+username;
  });

  // Edit button in address part is clicked.
  $('#editButtonInAddressField').click( () => {
    $('.fromCanOnOff').prop("disabled", false);
    $('#editButtonInAddressField').prop("disabled", true);
    $('#confirmButtonInAddressField').prop("disabled", false);
    $('#editButtonInAddressField').attr( "class" , "btn btn-secondary" );
    $('#confirmButtonInAddressField').attr( "class" , "btn btn-primary" );
  });

  // Confirm button in address part is clicked.
  $('#confirmButtonInAddressField').click( () => {
    $('.fromCanOnOff').prop("disabled", true);
    $('#editButtonInAddressField').prop("disabled", false);
    $('#confirmButtonInAddressField').prop("disabled", true);
    $('#editButtonInAddressField').attr( "class" , "btn btn-primary" );
    $('#confirmButtonInAddressField').attr( "class" , "btn btn-secondary" );

  });

  $('#confirm').on('click', function(e){
      const username = $('#userNavBarUsername').text()
      $.ajax({
          url: '/myappointment/'+username,
          data:{
              'username': username,
          },
          type: 'POST',
          success: function(data) {
              if(data.return_code === '400'){
                  console.log('error')
              }else{
                  alert('success checkout');
                  window.location='http://localhost:3000/'
              }
          },
          error: function(error){
              console.log('error check out')
          }
      })
  });

});
