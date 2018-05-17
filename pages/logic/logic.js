$(function() {
  $("#mb-Matias").click(function() {
    if ($(this).siblings().length == 0){
      var txt = $("<div class='col-8 col-s-12'></div>").load("http://dinosdcc.me/pages/Matias/index.html #mb-info");
      $(this).after(txt);
    }
    else {
      $(this).siblings().remove();
    }
  });
});
