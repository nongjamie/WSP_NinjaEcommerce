$(function () {

<<<<<<< HEAD
        $('.addToCartButton').on('click', function(e){
            const val = this.value
            const data = val.split(',')
            const quantity = $(`.fixsize[name=${data[1]}]`).val()
            const username = $('#userNavBarUsername').text()
            console.log(username)
            console.log(quantity)
            console.log(data)
            $.ajax({
                url: '/beer',
                data:{
                    'username': username,
                    'productID': data[2],
                    'quantity': parseInt(quantity)
=======
    $('.addToCartButton.onpage').on('click', function(e){
        const val = this.value
        const data = val.split(',')
        const quantity = $(`.fixsize.onpage[name=${data[1]}]`).val()
        const username = $('#userNavBarUsername').text()
        $(".fadeTo").fadeTo("fast", 0.5);
        $('.loading').css({
            'display': 'block',
            'z-index': '11',
        })
        $.ajax({
            url: '/whisky',
            data: {
                'username': username,
                'productID': data[2],
                'quantity': parseInt(quantity)

            },
            type: 'POST',
            success: function (data) {
                if (data.return_code === '400') {
                    console.log('error')
                } else {
                    $('.loading').css({'display': 'none',})
                    swal('Product added !!')
                    console.log(data)
                }
            },
            error: function (error) {
                console.log('add to cart error')
            }
        })
    })

    $('.addToCartButton.center').on('click', function(e){
        const val = this.value
        const data = val.split(',')
        const quantity = $(`.fixsize.center[name=${data[1]}]`).val()
        const username = $('#userNavBarUsername').text()
        console.log(username)
        console.log(quantity)
        console.log(data)
        $.ajax({
            url: '/whisky',
            data:{
                'username': username,
                'productID': data[2],
                'quantity': parseInt(quantity)
>>>>>>> 967a672f923c4b0ceceb05f397d739a0c4dbd712

                },
                type: 'POST',
                success: function(data) {
                    if(data.return_code === '400'){
                       console.log('error')
                    }else{
                        console.log(data)
                    }
                },
                error: function(error){
                    console.log('add to cart error')
                }
            })
        })

<<<<<<< HEAD
        $('#userNavBarConfirm').on('click', ()=>{
            window.location = '/mycart/' + $('#userNavBarUsername').text()
        })
=======

    $('#userNavBarConfirm').on('click', () => {
        window.location = '/mycart/' + $('#userNavBarUsername').text()
    })
>>>>>>> 967a672f923c4b0ceceb05f397d739a0c4dbd712

    });

// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//     for(i =0 ; i<1 ; i++){
//       product
//     }
//
// }
//
// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }

$(".imgClick").on("click", function () {
    const id = $(this).attr('id')
    console.log('id ' + id)
    $('.form-popup.' + id).css("display", "block");
});

$('.cancelButton').on('click', function () {
    const id = $(this).attr('id')
    console.log("Close" + id)
    $('.form-popup.' + id).css("display", "none");
})

// mouse point

  $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })
