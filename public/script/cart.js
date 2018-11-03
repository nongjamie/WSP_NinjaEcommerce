$( () => {

  // Cofirm button clicked.
  $('#yesButton').click( () => {
    console.log('Go to appointment page.');
    window.location = "http://localhost:3000/myappointment/None";
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    console.log('Cancel the confirm order, go back to whisky page.');
    window.location = "http://localhost:3000/whisky";
  });

  // Delete button clicked.
  $('.deleteButton').on('click', (e) => {
    const username = $('#userNavBarUsername').text()
    $target=$(e.target);
    const id =$target.attr('data-id');
    $.ajax(
        {
            type:'POST',
            url:'/mycart/'+username,
            success: function(response){
                alert('Delete');
                window.location.href='/';
        },
        error: function(err){
             console.log(err);
        }
     }
    );
    
  });

} );
