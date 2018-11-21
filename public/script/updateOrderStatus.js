console.log('this is from update.js');

$( () => {
$('.btn.btn-success').on('click',async(e)=>{
    const order =$(e.target).val()
    const val = order.split(',')
    console.log(val[0])
    $.ajax({
        url: '/admin/updateOrderStatus',
        data:{
            'orderStatus':val[0],
            'orderID':val[1]
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
            console.log('update order error')
        }
    })
})
} );
