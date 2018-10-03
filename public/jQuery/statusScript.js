$( () => {

  $('#status_inputform').on('keypress', (event) => {
    if(event.keyCode == 13) {
      let x = $('#status_inputform').val();
      console.log( x );
      console.log('from inside if');
    }
  } );

} );
