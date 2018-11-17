
$(() => {
        $("#name").on({
            keypress: function(){
                $(this).css("background-color", "lightgray");
            }, 
            click: function(){
                $(this).css("background-color", "yellow");
            } 
        });
    document.querySelector('#edit').addEventListener('click', function(e) {
            const name = $('#name').val()
            const address = $('#address').val()
            const phone = $('#phone').val()
            const gender= $("input[name='gender']:checked").val()
            const day = $(`select[name='day']`).val()
            const month = $(`select[name='month']`).val()
            const year = $(`select[name='year']`).val()
            const province = $('#province').val()
            const district = $('#distinct').val()
            const zipcode = $('#zip').val()
            const telephone = $('#telephone').val()
            const customerID = $('#edit').val()
            console.log(district)
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