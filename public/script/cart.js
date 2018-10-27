$( () => {

  $('#confirmButton').click( () => {
    console.log('Send the confirm order to database.');
  });

  $('#cancelButton').click( () => {
    console.log('Cancel the confirm order, go back to whisky page.');
    window.location = "http://localhost:3000/whisky";
  });

} );
