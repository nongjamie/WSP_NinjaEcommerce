console.log("profile.js")

var name = (document.getElementById('name').value = "jamie");
var address = document.getElementById('address').value = "kasetsart";
var distinct = document.getElementById('distinct').value = "oop";
var province = document.getElementById('province').value = "hereton";
var zip = document.getElementById('zip').value = "1112";
var telephone = document.getElementById('telephone').value = "08xxxxxxxx"

console.log(name);

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