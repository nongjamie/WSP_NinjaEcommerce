$( () => {

  $('#status-inputform').on('keypress', (event) => {
    if(event.keyCode === 13) {
      let x = $('#status-inputform').val();
      console.log( x );
    }
  } );

} );
