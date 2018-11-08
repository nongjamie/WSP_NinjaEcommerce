console.log('this is from layout.js');

$( () => {

  // Go to whisky page.
  $('.whiskyChoice').on('click', () => {
    console.log('Going to whisky page.');
    window.location = "http://localhost:3000/whisky";
  });

  // Go to beer page.
  $('.beerChoice').on('click', () => {
    console.log('Going to beer page.');
    window.location = "http://localhost:3000/beer";
  });

  // Go to mixer page.
  $('.mixerChoice').on('click', () => {
    console.log('Going to mixer page.');
    window.location = "http://localhost:3000/mixer";
  });

  // Go to wine page.
  $('.wineChoice').on('click', () => {
    console.log('Going to wine page.');
    window.location = "http://localhost:3000/wine";
  });

  // Go to mycart page by pressing the cart icon.
  $('#userNavBarCartIcon').on('click', () => {
    window.location = '/mycart/' + $('#userNavBarUsername').text();
  });

  $('.loadingClicked').on('click', function() {
    $( ".fadeTo" ).fadeTo( "fast" , 0.5);
    $('.loading').css({
        'display':'block',
        'z-index':'11',
    })
})

});
