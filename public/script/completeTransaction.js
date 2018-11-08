$(function () {

  // Cofirm button clicked.
  $('#yesButton').click( () => {
    console.log('Go to payment page.');
    const username = $('#userNavBarUsername').text()
    window.location = "http://localhost:3000/";
  });

  // Cancel button clicked then go to whisky page.
  $('#cancelButton').click( () => {
    console.log('Cancel the appointment, go back to my cart page.');
    window.location = "http://localhost:3000/summary";
  });

});
