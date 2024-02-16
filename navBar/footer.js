$(document).ready(function(){ 
    $.get("footer.html", function(data) {
      $("#myfooter").html(data);
    });
  }); 