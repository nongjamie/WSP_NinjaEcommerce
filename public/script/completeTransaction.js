$(function () {

    // Cancel button clicked then go to whisky page.
    $('#cancelButton').click(() => {
        const username = $('#userNavBarUsername').text()
        console.log('Cancel the appointment, go back to my cart page.');
        window.location = "http://localhost:3000/summary/" + username;
    });

    $('#yesButton').on('click', function (e) {
        window.location.href = '/'
    });

});
