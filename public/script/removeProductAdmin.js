console.log('this is from remove product.js');

$( () => {
$('.btn.btn-danger').on('click',async(e)=>{
    const productID =$(e.target).val()
    console.log(productID)
    $.ajax({
        url: '/admin/removeProduct',
        data:{
            'productID':productID,
        },
        type: 'POST',
        success: function(data) {
            if(data.return_code === '400'){
               console.log('error')
            }else{
                console.log(data)
                location.reload()
            }
        },
        error: function(error){
            console.log('remove product error')
        }
    })
})
} );
