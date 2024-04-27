$(document).ready(function(){ 
    $.get("navBar.html", function(data) {
      $("#navBar").html(data);
    });
  }); 