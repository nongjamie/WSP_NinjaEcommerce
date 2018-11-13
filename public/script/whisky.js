$(function () {

    $('.addToCartButton').on('click', function (e) {
        const val = this.value
        const data = val.split(',')
        const quantity = $(`.fixsize[name=${data[1]}]`).val()
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

    $('#userNavBarConfirm').on('click', () => {
        window.location = '/mycart/' + $('#userNavBarUsername').text()
    })

});

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

// $('.cancelButton').focusout("click",function() {
//     const id = $(this).attr('id')
//     console.log("Close" + id)
//     $('.form-popup.'+id).css("display", "none");
// })



// $(".form-container").focusout('click',function(){
//   console.log("Outtttt")
//   const id = $(this).attr('id')
//   console.log("Close" + id)
//   $('.form-popup.'+id).css("display", "none");
// })
