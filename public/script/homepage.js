console.log('This is from homepage.js');
$( () => {

  let testArray = [
    {
      productName: 'Beer',
      productCost: 300,
      description: 'Varit love thailand.'
    },
    {
      productName: 'Wine',
      productCost: 500,
      description: 'Jim love thailand.'
    },
    {
      productName: 'Whisky',
      productCost: 1000,
      description: 'Fame love thailand.'
    }
  ];

  $('#bestsellerBoxTableItem').html( () => {
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
