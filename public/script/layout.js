console.log('this is from layout.js');

$(() => {

  // Go to whisky page.
  $('.whiskyChoice').on('click', () => {
    console.log('Going to whisky page.');
    window.location = "/whisky";
  });

  // Go to beer page.
  $('.beerChoice').on('click', () => {
    console.log('Going to beer page.');
    window.location = "/beer";
  });

  // Go to mixer page.
  $('.mixerChoice').on('click', () => {
    console.log('Going to mixer page.');
    window.location = "/mixer";
  });

  // Go to wine page.
  $('.wineChoice').on('click', () => {
    console.log('Going to wine page.');
    window.location = "/wine";
  });

  // Go to mycart page by pressing the cart icon.
  $('#userNavBarCartIcon').on('click', () => {
    window.location = '/mycart/' + $('#userNavBarUsername').text();
  });

  $('.loadingClicked').on('click', function () {
    $(".fadeTo").fadeTo("fast", 0.5);
    $('.loading').css({
      'display': 'block',
      'z-index': '11',
    })
  })

  $('#searchbutton').on('click', () => {
    const productName = $('#searchinput').val()
    $(".fadeTo").fadeTo("fast", 0.5);
    $('.loading').css({
        'display': 'block',
        'z-index': '11',
    })
      $.ajax({
      url: '/search/',
      data:{
          'productName':productName
        },
  type: 'POST',
  success: function(data) {
      if(data.return_code === '400'){
         console.log('error')
      }else{
         window.location="/search/"
      }
  },
  error: function(error){
      console.log(error)
  }
})
  })
})