console.log('this is from update.js');

$( () => {
$('.btn.btn-success').on('click',async(e)=>{
    const order =$(e.target).val()
    const val =order.split(',')
    console.log(val)
    const status= $(`option[name=${val[1]}]:selected`).val()
    console.log(status)
    $.ajax({
        url: '/admin/updateOrderStatus',
        data:{
            'orderStatus':status,
            'orderID':val[0]
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
$('.btn.btn-danger').on('click',async(e)=>{
    const orderID =$(e.target).val()
    console.log(orderID)
    $.ajax({
        url: '/admin/removeOrder',
        data:{
            'orderID':orderID,
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
            console.log('remove feedback error')
        }
    })
})
} );
