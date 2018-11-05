$( () => {

  $(".masterCardWay").click( () => {
    $(".paymentFieldInput").html(`
      <p>Input here for mastercard payment</p>
      `);
  });

  $(".scbWay").click( () => {
    $(".paymentFieldInput").html(`
      <p>Input here for scb payment</p>
      `);
  });

  $(".kbankWay").click( () => {
    $(".paymentFieldInput").html(`
      <p>Input here for kbank payment</p>
      `);
  });

} );
