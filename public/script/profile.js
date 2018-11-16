console.log("profile.js")

// document.getElementById('edit').

$(() => {
    // if('#name' != document.getElementById('name').value) {
        $("#name").on({
            keypress: function(){
                $(this).css("background-color", "lightgray");
            }, 
            click: function(){
                $(this).css("background-color", "yellow");
            } 
        });
    document.querySelector('#edit').addEventListener('click', function(e) {
        console.log("edit");
    })
    document.querySelector('#cancel').addEventListener('click', function(e) {
        console.log("cancel");
    })
    
    // }
});