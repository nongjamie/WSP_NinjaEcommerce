$(function () {

    // Cancel button clicked then go to whisky page.
    $('#cancelButton').click(() => {
        const username = $('#userNavBarUsername').text()
        console.log('Cancel the appointment, go back to my cart page.');
        window.location = "/summary/" + username;
    });

    $('#yesButton').on('click', function (e) {
        window.location.href = '/'
    });

});
