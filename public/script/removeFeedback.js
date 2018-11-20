console.log('this is from remove.js');

$( () => {
$('.btn.btn-danger').on('click',async(e)=>{
    const feedbackID =$(e.target).val()
    console.log('paul')
    console.log(feedbackID)
    $.ajax({
        url: '/admin/removeFeedback',
        data:{
            'feedbackID':feedbackID,
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
