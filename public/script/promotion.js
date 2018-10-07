console.log('this is from promotion.js');

$( () => {

  $('#userNavBarConfirm').on( 'click' , () => {
    url = 'http://localhost:3000/' + 'confirmOrder';
    window.location = url;
  });

} );
