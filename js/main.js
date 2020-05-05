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
            var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=8i7DkkKJ0SiHMEDMfoceSri0ATmQmmGw&limit=30");
            xhr.done(function (response) {
                console.log("success got data", response);
                var jiffs = response.data;
                for (i in jiffs) {
                    $(".results").append("<img src='" + jiffs[i].images.original.url + "'/>");
                }
            })
        }
   


