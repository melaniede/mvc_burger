// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {
    $(".devour-button").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
  
      // Send PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          // Reload page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
      };
  
      // Send POST request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Reload page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-button").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send DELETE request
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          // Reload page to get the updated list
          location.reload();
        }
      );
    });
  });
  