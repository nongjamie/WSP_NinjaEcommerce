$( () => {

  // Cofirm button clicked.
  $('#confirmButton').click( () => {
    console.log('Send the confirm order to database.');
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
