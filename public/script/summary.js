$( () => {

  // Cofirm button clicked.
  $('#yesButton').click( () => {
    console.log('Go to summary page.');
    window.location = "http://localhost:3000/confirmTransaction";
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    console.log('Cancel the payment, go back to appointment page.');
    window.location = "http://localhost:3000/payment";
  });

} );
