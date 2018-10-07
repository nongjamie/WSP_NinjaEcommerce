console.log('This is from homepage.js');
$( () => {

  let testArray = [
    {
      productName: 'Varit Ass',
      productCost: 8000,
      description: 'varit.as@ku.th'
    },
    {
      productName: 'Varit Ass',
      productCost: 9000,
      description: 'varit.as@ku.th'
    },
    {
      productName: 'Varit Ass',
      productCost: 10000,
      description: 'varit.as@ku.th'
    }
  ];

  $('#bestseller-box-table-item').html( () => {
    let ans = '';
    for(let i=0 ; i < testArray.length ; i++) {
      let name = testArray[i].productName;
      let cost = testArray[i].productCost;
      let detail = testArray[i].description;
      ans = ans + `
      <tr>
        <th scope="row"> ${i+1} </th>
        <td> ${name} </td>
        <td> ${cost} </td>
        <td> ${detail} </td>
      </tr>
      `;
    }
    console.log('Success in update table items');
    return ans;
  } );

} );
