// event for the EAT burger button
$(document).ready(function () {
    $(".burger-container").on("click", ".eat-burger-btn", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
  
      $.ajax(`/burgers/updateOne/${id}`, {
        type: "PUT",
      }).then(function (data) {
        location.reload();
      });
    });
  });