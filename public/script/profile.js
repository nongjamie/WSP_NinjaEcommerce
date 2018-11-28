
$(() => {
    var old_name = $('#name').val();
    var old_address = $('#address').val();
    var old_province = $('#province').val();
    var old_district = $('#distinct').val();
    var old_zip = $('#zip').val();
    var old_telephone = $('#telephone').val();
    var old_gender = $("input[name='gender']:checked").val()
    var old_day = $(`select[name='day']`).val()
    var old_month = $(`select[name='month']`).val()
    var old_year = $(`select[name='year']`).val()
    console.log(name);
    

    $('#name').on({
        change: function(){
            if(old_name == $('#name').val()){
                console.log("nothing change");
                $(this).css("background-color", "white");
            }else{
                console.log("something change")
                $(this).css("background-color", "yellow");
                console.log("change color");
            }
        }
    });

    $('#address').on({
        change: function(){
            if(old_address == $('#address').val()){
                console.log("nothing change");
                $(this).css("background-color", "white");
            }else{
                console.log("something change")
                $(this).css("background-color", "yellow");
                console.log("change color");
            }
        }
    });

    $('#province').on({
        change: function(){
            if(old_province == $('#province').val()){
                console.log("nothing change");
                $(this).css("background-color", "white");
            }else{
                console.log("something change")
                $(this).css("background-color", "yellow");
                console.log("change color");
            }
        }
    });

    $('#distinct').on({
        change: function(){
            if(old_district == $('#distinct').val()){
                console.log("nothing change");
                $(this).css("background-color", "white");
            }else{
                console.log("something change")
                $(this).css("background-color", "yellow");
                console.log("change color");
            }
        }
    });

    $('#zip').on({
        change: function(){
            if(old_zip == $('#zip').val()){
                console.log("nothing change");
                $(this).css("background-color", "white");
            }else{
                console.log("something change")
                $(this).css("background-color", "yellow");
                console.log("change color");
            }
        }
    });

    $('#telephone').on({
        change: function(){
            if(old_telephone == $('#telephone').val()){
                console.log("nothing change");
                $(this).css("background-color", "white");
            }else{
                console.log("something change")
                $(this).css("background-color", "yellow");
                console.log("change color");
            }
        }
    });

    document.querySelector('#edit').addEventListener('click', function(e) {
            const name = $('#name').val()
            const address = $('#address').val()
            const gender= $("input[name='gender']:checked").val()
            const day = $(`select[name='day']`).val()
            const month = $(`select[name='month']`).val()
            const year = $(`select[name='year']`).val()
            const province = $('#province').val()
            const district = $('#distinct').val()
            const zipcode = $('#zip').val()
            const telephone = $('#telephone').val()
            const customerID = $('#edit').val()
              $(".fadeTo").fadeTo("fast", 0.5);
              $('.loading').css({
                  'display': 'block',
                  'z-index': '11',
              })
              $.ajax({
              url: '/profile/update',
              data:{
                'customerID': customerID,
                'name': name,
                'phone':telephone,
                'address': address,
                'gender' : gender,
                'district': district,
                'province': province,
                'zipcode': zipcode,
                'bday': day+'/'+month+'/'+year
                },
          type: 'POST',
          success: function(data) {
              if(data.return_code === '400'){
                 console.log('error')
              }else{
                alert('complete')
                 location.reload()
              }
          },
          error: function(error){
              console.log(error)
          }
        })
    })
    document.querySelector('#cancel').addEventListener('click', function(e) {
        window.location="/"
    })
    
});