
  
// $("form").on("submit", function (e){
//      e.preventDefault();
//      goGiphy();
//  });
// function goGiphy() {
//      var input = $(".search").val();
//      $.getJSON("https://api.giphy.com/v1/gifs/search?api_key=8i7DkkKJ0SiHMEDMfoceSri0ATmQmmGw&limit=30&q=" + input, function (json) {
//          data = JSON.parse(JSON.stringify(json));
//          imgSrc = data.data;
//          for (i in imgSrc) {
//         $(".giphy").append("<img src='" + imgSrc[i].images.original.url + "' style='height:250px; width:250px;'/>");
//      }
//    });
// }
















$(function () {
    $(".button").click(function () {
        $(".results").empty();
        $("form").on("submit", function (e){
            e.preventDefault();
            getData();
        });
    });
});
function getData() {
    var input = $(".search").val();
            var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=8i7DkkKJ0SiHMEDMfoceSri0ATmQmmGw&limit=30");
            xhr.done(function (response) {
                console.log("success got data", response);
                var jiffs = response.data;
                for (i in jiffs) {
                    $(".results").append("<img src='" + jiffs[i].images.original.url + "' style='width:250px;'/>");
                }
            })
        }
   



