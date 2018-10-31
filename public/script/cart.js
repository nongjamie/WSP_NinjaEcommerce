$( () => {

  // Cofirm button clicked.
  $('#confirmButton').click( () => {
    console.log('Go to appointment page.');
    window.location = "http://localhost:3000/myappointment/None";
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    console.log('Cancel the confirm order, go back to whisky page.');
    window.location = "http://localhost:3000/whisky";
  });

  // Delete button clicked.
  $('.deleteButton').on('click', () => {

  });

} );
