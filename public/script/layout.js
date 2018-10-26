console.log('this is from wine.js');

$( () => {

    $('#userNavBarConfirm').on('click', ()=>{
        window.location = '/mycart/' + $('#userNavBarUsername').text()
    })

});
