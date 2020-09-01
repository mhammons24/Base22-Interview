function articleNavCompanies() {
    var x = document.getElementById("bottom-left");
    document.getElementById("programs").classList.remove("active");
    document.getElementById("companies").classList.add("active");
    x.style.display = "none";
}
function articleNavPrograms() {
    var x = document.getElementById("bottom-left");
    document.getElementById("companies").classList.remove("active");
    document.getElementById("programs").classList.add("active");
    x.style.display = "inherit";
}
$(function () {
    var templateScript = $("#video-template").html();
  
    var template = Handlebars.compile(templateScript);
  
    var compiledHtml = template();
  
    $('.content-right').html(compiledHtml);
  })