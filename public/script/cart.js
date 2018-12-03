$(() => {
  // Cofirm button clicked.
  $("#yesButton").click(() => {
    console.log("Go to appointment page.")
    const username = $("#userNavBarUsername").text()
    $(".loading").css({
      display: "block",
      "z-index": "11"
    })
    window.location = "https://ninja-ecommerce.herokuapp.com/myappointment/" + username
  })

  // Cancel button clicked then go to whisky page.
  $("#cancelButton").click(() => {
    console.log("Cancel the confirm order, go back to whisky page.")
    window.location = "/whisky"
  })

  // Delete button clicked.
  $(".deletesButton").on("click", function(e) {
    const val = this.value
    const data = val.split(",")
    const quantity = $(`.fixsize[name=${data[1]}]`).val()
    const username = $("#userNavBarUsername").text()
    // console.log(val)
    // console.log(username)
    // console.log(quantity)
    // console.log(data)
    $(".fadeTo").fadeTo("fast", 0.5)
    $(".loading").css({
      display: "block",
      "z-index": "11"
    })
    console.log("/mycart/" + username)

    $.ajax({
      url: "/mycart/" + username,
      data: {
        username: username,
        productID: data[2],
        quantity: parseInt(quantity)
      },
      type: "POST",
      success: function(data) {
        console.log("paul")
        if (data.return_code === "400") {
          console.log("error")
        } else {
          console.log("paul2")
          $(".loading").css({
            display: "block",
            "z-index": "11"
          })
          location.reload()
        }
      },
      error: function(error) {
        console.log("delete error")
      }
    })
  })
})
