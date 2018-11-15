console.log('This is from homepage.js');
$( () => {

  let exampleSortedList = [
    { productPrice: '899',
     country: 'Scotland',
     vol: '1000 ml',
     productDetail: '1.0 Liter',
     distributor: 'Clynelish Distillery Co., Ltd.',
     categoryID: 'RBqmi3gjGASAzpzaXxZe',
     productName: 'Red_label (1.0 Liter)',
     ABV: '40%',
     productID: '4JbTehkukn42UPXr0H9c'
   },
   { distributor: 'Thai Beverage Public Co., Ltd.',
     categoryID: 'RBqmi3gjGASAzpzaXxZe',
     productName: 'Blend_285 (1.0 Liter)',
     ABV: '35 %',
     productPrice: '360',
     country: 'Thailand',
     vol: '1000 ml',
     productDetail: '1.0 Liter',
     productID: 'C9MUpPKbebHjf7z0zDjq'
   },
   { productName: 'Black_label (1 Liter)',
      ABV: '40 %',
      productPrice: '1699',
      country: 'Scotland',
      vol: '1000 ml',
      productDetail: '1.0 Liter',
      distributor: 'Clynelish Distillery Co., Ltd.',
      categoryID: 'RBqmi3gjGASAzpzaXxZe',
      productID: 'PY5vYUhydsDKYdpTQ65P'
    }
  ];

  $('.bestSellerBody').html( () => {
    let ans = '';
    let counter = exampleSortedList.length;
    for(let i=0 ; i < counter ; i++) {
      let product = exampleSortedList[i].productID + '_' + exampleSortedList[i].productName + '.jpg';
      let rank = (i + 1);
      let name = exampleSortedList[i].productName;
      let cost = exampleSortedList[i].productPrice;
      ans = ans + `
        <div class="row">
          <span class="Width25Perc Height80PX"><img src="/pictures/${product}"></span>
          <span class="Width25Perc Height80PX">${rank}</span>
          <span class="Width25Perc Height80PX">${name}</span>
          <span class="Width25Perc Height80PX">${cost}</span>
        </div>
      `;
    }
    console.log('Success in update table items');
    return ans;
  } );


} );
