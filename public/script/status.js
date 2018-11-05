console.log('this is from status.js');
$(() => {

  let testStatus = [
    {
      orderNumber: 'hereton',
      productName: 'beer',
      productAmount: '2',
      productCost: 7000,
      productstatus: 'packing'
    },
    {
      orderNumber: 'fame',
      productName: 'beer',
      productAmount: 2,
      productCost: 7000,
      productstatus: 'packing'
    },
    {
      orderNumber: 'fame',
      productName: 'wine',
      productAmount: 1,
      productCost: 10000,
      productstatus: 'sending'
    },
    {
      orderNumber: 'jamie',
      productName: 'beer',
      productAmount: 2,
      productCost: 7000,
      productstatus: 'packing'
    },
    {
      orderNumber: 'varit',
      productName: 'beer',
      productAmount: 2,
      productCost: 7000,
      productstatus: 'complete'
    },
    {
      orderNumber: 'hereton',
      productName: 'wine',
      productAmount: 2,
      productCost: 10000,
      productstatus: 'packing'
    },
    {
      orderNumber: 'hereton',
      productName: 'janny',
      productAmount: 1,
      productCost: 10,
      productstatus: 'kidnapping'
    }
  ];

  document.querySelector('#status-inputform').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        let id = $('#idOrder').val();
        let allOrder = 0;
        let amountOrder = 0;
        let customerOrder = [];
        let mean = 0;
        for(let i = 0; i < testStatus.length; i++) {
            if(id == testStatus[i].orderNumber) {
              customerOrder[amountOrder] = testStatus[i];
              amountOrder++;
            }
        }
        if(customerOrder.length == 0) {
          console.log('Can not find the order');
          $('#statusTableItem').html( () => {
            let ans = `<tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>`
            return ans;
          } );
          $('.orderNumberDisplay').html(() => {
            return `<span>Please try again.</span>`
          });
          $("#statusProgessbarResult").attr("style","width: 0%");
          $('#idOrder').val('');
        }
        else {
          $('.orderNumberDisplay').html(() => {
            return `<span>Order number : ${id}</span>`
          });
          $('#statusTableItem').html( () => {
            let ans = '';
            for (let i = 0; i < customerOrder.length; i++) {
              let name = customerOrder[i].productName;
              let amount = customerOrder[i].productAmount;
              let cost = customerOrder[i].productCost;
              let status = customerOrder[i].productstatus;
              if( status === 'packing' ) {
                mean += 0.25
              }
              else if( status === 'sending' ) {
                mean += 0.50
              }
              else if( status === 'complete' ) {
                mean += 1
              }
              else {
                mean += 0
              }
              ans = ans + `
              <tr>
                <th scope="row"> ${i+1} </th>
                <td> ${name} </td>
                <td> ${amount} </td>
                <td> ${cost} </td>
                <td> ${status} </td>
              </tr>
              `;
            }
            console.log('Success in update Status table items');
            mean = mean / (customerOrder.length);
            if( mean <= 0.25 ) {
              $("#statusProgessbarResult").attr("style","width: 25%");
            }
            else if( mean <= 0.50 ) {
              $("#statusProgessbarResult").attr("style","width: 50%");
            }
            else if( mean <= 0.75 ) {
              $("#statusProgessbarResult").attr("style","width: 75%");
            }
            else {
              $("#statusProgessbarResult").attr("style","width: 100%");
            }
            $('#idOrder').val('');
            return ans;
        });
        }
      }
  });
});
