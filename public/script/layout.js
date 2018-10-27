console.log('this is from layout.js');

$( () => {

    $('#userNavBarConfirm').on('click', ()=>{
        window.location = '/mycart/' + $('#userNavBarUsername').text()
    })

});
