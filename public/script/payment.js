$( () => {

  $(".masterCardWay").click( () => {
    $(".paymentFieldInput").html(`
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Card Holder's Name</span>
          <input type="number" class="form-control" placeholder="Card Holder's Name" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Credit Card number</span>
          <input type="text" class="form-control" placeholder="Credit Card number" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Expiration date</span>
          <input type="text" class="form-control" placeholder="Expiration date" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Card security code</span>
          <input type="text" class="form-control" placeholder="Card security code" aria-label="Username" aria-describedby="basic-addon1">
        </div>
      </div>
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
