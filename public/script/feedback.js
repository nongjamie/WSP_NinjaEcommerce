$(()=>{

    $(document).ready(function () {
        $('#feedbackForm').ajaxForm({ success: showResponse });
    });

    function showResponse(responseText, statusText, xhr, $form)  {
        if(statusText === 'success'){
            alert('Thank you for sending feedback')
        }else{
            alert('Response error')
        }
    }

    $('.feedbackSign').click(() => {
        // $('.feedback').toggle('slide')
        $('.feedback').removeClass('fadeOutUpBig')
        $('.feedback').addClass('animated fadeInRight')
        $('.feedback').css('display','block')
        $('.feedbackSign').css('display','none')
      })

    $('.feedbackCancelButton, .feedbackSummitButton').click(() => {
        // $('.feedback').toggle('slide')
        $('.feedback').removeClass('fadeInRight')
        $('.feedback').addClass('fadeOutUpBig')
        $('.feedbackSign').addClass('animated bounceInUp')
        $('.feedbackSign').css({
            'display' : 'block',
            'position' : 'fixed',
        })
    })
    
})
