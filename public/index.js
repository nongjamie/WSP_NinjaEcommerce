$(function () {
    $(document).ready(function () {
        $('#signUpForm').submit(function () {
            // inside event callbacks 'this' is the DOM element so we first 
            // wrap it in a jQuery object and then invoke ajaxSubmit 
            $(this).ajaxSubmit({ beforeSubmit: validate });
            console.log('ajaxform beforesubmit')
            // !!! Important !!! 
            // always return false to prevent standard browser submit and page navigation 
            return false;
        });
    });

    $('.password, .confirmPassword').on('keyup', function () {
        if ($('.password').val() == $('.confirmPassword').val()) {
            $('#message').html('Password Matching').css('color', 'green');
        } else
            $('#message').html('Password Not Matching').css('color', 'red');
        if ($('.password').val() === '' && $('.confirmPassword').val() === '') {
            $('#message').html('Please input password').css('color', 'red');
        }
    });

    function validate(formData, jqForm, options) {
        for (var i = 0; i < formData.length; i++) {
            if (formData[i].name === 'password' || formData[i].name === 'confirmPassword') {
                if (formData[i].value === '') {
                    $('#validateMessage').html('Plese input your password').css('color', 'red');
                    return false;
                }
            }
            if (formData[i].name === 'email') {
                const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                if (!testEmail.test(formData[i].value)) {
                    // console.log(formData[i].name + 'dsadasdasdas')
                    $('#validateMessage').html('Plese input the right email').css('color', 'red');
                    return false;
                }
            }
        }
    }

    $('#username').focusout( function () {
        var searchid = $(this).val();
        console.log(searchid)
        $.ajax({ 
            url: 'register.php', data: {action: 'isUserNameTaken', params: [username]},
            type: 'post',
            success: function(data) {
                //Do Something
            }
        });
    })


});

