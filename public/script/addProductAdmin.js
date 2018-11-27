console.log('this is from add product admin js');

$( () => {
$('.btn.btn-danger').on('click',async(e)=>{
    const name = $('#name').val()
    const price = $('#price').val()
    const detail = $('#detail').val()
    const categoryid = $('#categoryid').val()
    const country = $('#country').val()
    const abv = $('#abv').val()
    const distributor = $('#distributor').val()
    const imgUrl = $('#imgUrl').val()
    const vol = $('#vol').val()
    console.log(detail)
    $.ajax({
        url: '/admin/addProduct',
        data:{
            'name': name,
            'price' : price,
            'detail' : detail,
            'categoryID' : categoryid,
            'country':country,
            'abv':abv,
            'distributor':distributor,
            'imgUrl':imgUrl,
            'vol':vol
            
        },
        type: 'POST',
        success: function(data) {
            if(data.return_code === '400'){
               console.log('error')
            }else{
                console.log(data)
                alert('success add product')
                location.reload()
            }
        },
        error: function(error){
            console.log('add product error')
        }
    })
})
} );
