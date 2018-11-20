console.log('this is from status.js');
$(() => {

  // let testStatus = [
  //   {
  //     orderNumber: 'hereton',
  //     productName: 'beer',
  //     productAmount: '2',
  //     productCost: 7000,
  //     productstatus: 'packing'
  //   },
  //   {
  //     orderNumber: 'fame',
  //     productName: 'beer',
  //     productAmount: 2,
  //     productCost: 7000,
  //     productstatus: 'packing'
  //   },
  //   {
  //     orderNumber: 'fame',
  //     productName: 'wine',
  //     productAmount: 1,
  //     productCost: 10000,
  //     productstatus: 'sending'
  //   },
  //   {
  //     orderNumber: 'jamie',
  //     productName: 'beer',
  //     productAmount: 2,
  //     productCost: 7000,
  //     productstatus: 'packing'
  //   },
  //   {
  //     orderNumber: 'varit',
  //     productName: 'beer',
  //     productAmount: 2,
  //     productCost: 7000,
  //     productstatus: 'complete'
  //   },
  //   {
  //     orderNumber: 'hereton',
  //     productName: 'wine',
  //     productAmount: 2,
  //     productCost: 10000,
  //     productstatus: 'packing'
  //   },
  //   {
  //     orderNumber: 'hereton',
  //     productName: 'janny',
  //     productAmount: 1,
  //     productCost: 10,
  //     productstatus: 'kidnapping'
  //   }
  // ];

  document.querySelector('.statusInputForm').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        let id = $('#idOrder').val();
        $.ajax({
          url: '/status',
          data: { 
            'orderID': id,
          },
          type: 'POST',
          success: function (data) {
            if (data.return_code === '400') {
              console.log('error')
            } else {
              location.reload()
            }
          },
          error: function (error) {
            console.log('error status')
          }
        })
        // let allOrder = 0;
        // let amountOrder = 0;
        // let customerOrder = [];
        // let numberBody = '';
        // let productBody = '';
        // let amountBody = '';
        // let costBody = '';
        // let statusBody = '';
        // let progressbar = 0;
        // let round = 0;
        // for(let i = 0; i < testStatus.length; i++) {
        //     if(id == testStatus[i].orderNumber) {
        //       customerOrder[amountOrder] = testStatus[i];
        //       amountOrder++;
        //     }
        // }
        // if(customerOrder.length == 0) {
        //   console.log('Can not find the order');
        //   $('.orderNumberDisplay').html(() => {
        //     return `<span>Please try again.</span>`
        //   });
        //   $('#idOrder').val('');
        // }
        // else {
        //   $('.orderNumberDisplay').html(() => {
        //     return `<span>Order number : ${id}</span>`
        //   });
        //   $('#idOrder').val('');
        //   for(let i = 0 ; i < customerOrder.length ; i++) {
        //     let name = customerOrder[i].productName;
        //     let amount = customerOrder[i].productAmount;
        //     let cost = customerOrder[i].productCost;
        //     let status = customerOrder[i].productstatus;
        //     round = round + 1;
        //     if( status === 'packing' ) progressbar = progressbar + 33;
        //     if( status === 'sending' ) progressbar = progressbar + 66;
        //     if( status === 'complete' ) progressbar = progressbar + 100;
        //     numberBody = numberBody + `
        //       <div class="bodyStyle">
        //         ${i+1}
        //       </div>
        //     `;
        //     productBody = productBody + `
        //       <div class="bodyStyle">
        //         ${name}
        //       </div>
        //     `;
        //     amountBody = amountBody + `
        //       <div class="bodyStyle">
        //         ${amount}
        //       </div>
        //     `;
        //     costBody = costBody + `
        //       <div class="bodyStyle">
        //         ${cost}
        //       </div>
        //     `;
        //     statusBody = statusBody + `
        //       <div class="bodyStyle">
        //         ${status}
        //       </div>
        //     `;
        //   }
        // }
        // let mean = progressbar / round;
        // if( progressbar == 0 ) $("#statusProgessbarResult").attr("style","width: 0%");
        // else if( mean > 0 && mean <= 33 ) $("#statusProgessbarResult").attr("style","width: 33%");
        // else if( mean > 33 && mean < 66 ) $("#statusProgessbarResult").attr("style","width: 66%");
        // else $("#statusProgessbarResult").attr("style","width: 100%");
        // $('.numberColBody').html(numberBody);
        // $('.productColBody').html(productBody);
        // $('.amountColBody').html(amountBody);
        // $('.costColBody').html(costBody);
        // $('.statusColBody').html(statusBody);

      }
  });
});
