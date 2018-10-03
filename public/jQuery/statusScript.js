$( () => {

  let array = [
    {
      orderNumber: 000001,
      number: 1,
      productName: "Kong",
      amount: 2,
      cost: 3000,
      status: "sending"
    }
  ];

  $('#status_inputform').on('keypress', (event) => {
    if(event.keyCode == 13) {
      let input = $('#status_inputform').val();
      if( containInArray( input ) ) {

      }
    }
  } );

  function containInArray( input ) {
    for( i = 0 ; i < array.length ; i++ ) {
      if( array[i].orderNumber == input ) {
        console.log("have");
        return true;
      }
    }
    return false;
  }

} );
