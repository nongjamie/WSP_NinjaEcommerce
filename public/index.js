$(function () {
    var username = ''
    var email = ''
    $(document).ready(function () {
<<<<<<< HEAD
        $('#signUpForm').submit(function () {
            // inside event callbacks 'this' is the DOM element so we first
            // wrap it in a jQuery object and then invoke ajaxSubmit
            $(this).ajaxSubmit({ beforeSubmit: validate });
            console.log('ajaxform beforesubmit')
            // !!! Important !!!
            // always return false to prevent standard browser submit and page navigation
            return false;
        });
=======
        $('#signUpForm').ajaxForm({ beforeSubmit: validate, success: showResponse });
>>>>>>> 6d66a036dfe5fe986f98162e9cb4814b90192b9d
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
        for(i = 0 ; i < formData.length;i++){
            if(formData[i].name === 'email'){
                const testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                if(!testEmail.test(formData[i].value)){
                    console.log('wrong email format')
                    $('#emailError').html('Plese input the right email').css('color', 'red');
                    alert('Wrong email format')
                    return false;
                }
            }
            
            if(formData[i].name === 'password' && formData[i+1].name === 'confirmPassword'){
                if(formData[i].value !== formData[i+1].value){
                    alert('Password is not matching')
                    return false
                } 
            }
        }
        if(username){
            alert('Please input a new username')
            return false
        }

        if(email){
            alert('Please input a new email')
            return false
        }
        return true
    }

    function showResponse(responseText, statusText, xhr, $form)  { 
        if(statusText === 'success'){
            console.log('Redirecting to /login ...')
            alert('Sign up complete!!')
            window.location.pathname = '/login'
        }else{
            alert('Response error')
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
                    console.log(data)
                    $('#usernameError').html('Username has been used').css('color', 'red');
                    username = true
                }else{
                    console.log(data)
                    $('#usernameError').html('')
                    username = false
                }
            },
            error: function(error){
                console.log(error)
            }
        });
    })
    $('#email').focusout( function () {
        email = $(this).val();
        $.ajax({ 
            url: 'https://us-central1-ninjadrink-25671.cloudfunctions.net/isEmailTaken',
            headers: {
                'email': email,
            },
            type: 'POST',
            success: function(data) {
                if(data.return_code === '400'){
                    console.log(data)
                    $('#emailError').html('email has been used').css('color', 'red');
                    email = true
                }else{
                    console.log(data)
                    $('#emailError').html('')
                    email = false
                }
            },
            error: function(error){
                console.log(error)
            }
        });
    })


});
