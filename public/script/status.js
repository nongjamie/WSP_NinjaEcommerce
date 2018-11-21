console.log('this is from status.js');
$(() => {

  document.querySelector('.statusInputForm').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        let id = $('#idOrder').val();
        $.ajax({
          url: '/status',
          data: {
            'orderID': id,
          },
          type: 'POST',
          success: function (data) {
            if (data.return_code === '400') {
              console.log('error')
            } else {
              location.reload()
            }
          },
          error: function (error) {
            console.log('error status')
          }
        })
      }
  });
});
