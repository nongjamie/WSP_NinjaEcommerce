$(function () {

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

        $('#userNavBarConfirm').on('click', ()=>{
            window.location = '/mycart/' + $('#userNavBarUsername').text()
        })

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

$(".imgClick").on("click", function(){
    const id = $(this).attr('id')
    console.log('id ' + id)
    $('.form-popup.'+id).css("display", "block");
});

$('.cancelButton').on('click', function() {
    const id = $(this).attr('id')
    console.log("Close" + id)
    $('.form-popup.'+id).css("display", "none");
})
