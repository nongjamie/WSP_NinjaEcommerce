$(function () {
    var username = ''
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
        const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        if(username){
            return false
        }

        if(formData[2].value !== formData[3].value){
            return false
        }
        if(!testEmail.test(formData[1].value)){
            console.log('wrong password')
            $('#emailError').html('Plese input the right email').css('color', 'red');
            return false;
        }
    }

    $('#username').focusout( function () {
        username = $(this).val();
        $.ajax({ 
            url: 'https://us-central1-ninjadrink-25671.cloudfunctions.net/isUsernameTaken',
            headers: {
                'username': username,
            },
            type: 'POST',
            success: function(data) {
                if(data.return_code === '400'){
                    $('#usernameError').html('Username has been used').css('color', 'red');
                    username = true
                }else{
                    $('#usernameError').html('')
                    username = false
                }
            }
        });
    })


});

