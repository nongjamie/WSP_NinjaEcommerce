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
                    alert('success checkout');
                    window.location='http://localhost:3000/'
                }
            },
            error: function(error){
                console.log('error check out')
            }
        })
    })
})