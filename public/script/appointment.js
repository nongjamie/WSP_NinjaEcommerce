$(function () {
    $('#confirm').on('click', function(e){
        const username = $('#userNavBarUsername').text()
        $.ajax({
            url: '/myappointment/'+username,
            data:{
                'username': username,
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
                console.log('error check out')
            }
        })
    })
})