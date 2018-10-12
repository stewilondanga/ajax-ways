var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

//xhr version
var xhr = document.querySelector("#xhr");
var ronXhr = document.querySelector("#quote");
xhr.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && 200) {
      var quote = JSON.parse(XHR.responseText);
      ronXhr.innerText = quote;
    }
  }
  XHR.open("GET", url)
  XHR.send();
})

//fetch version
var fetchbtn = document.querySelector("#fetch");
var ronFetch = document.querySelector("#quote");
fetchbtn.addEventListener("click", function() {
  fetch(url)
    .then(function(req) {
      req.json().then(function(data) {
        ronFetch.innerText = data[0];
      })
    })
    .catch(function() {
      console.log("err");
    })
});

//jquery version
var jquery = document.querySelector("#jquery");
// var ronJquery = document.querySelector("#quote");
$('#jquery').click(function() {
  $.getJSON(url)
    .done(function(data) {
      $('#quote').text(data[0]);
    });
})


//axios version
var axiosbtn = document.querySelector("#axios");
var ronAxios = document.querySelector("#quote");
axiosbtn.addEventListener("click", function() {
  axios.get(url)
    .then(function(res) {
      ronAxios.innerText = res.data[0];
    })
    .catch(function() {
      alert("error");
    })
})
