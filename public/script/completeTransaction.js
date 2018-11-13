$(function () {

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    const username = $('#userNavBarUsername').text()
    console.log('Cancel the appointment, go back to my cart page.');
    window.location = "http://localhost:3000/summary/"+username;
  });

  $('#yesButton').on('click', function(e){
    const username = $('#userNavBarUsername').text()
    $.ajax({
        url: '/completeTransaction/'+username,
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
