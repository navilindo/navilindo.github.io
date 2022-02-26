function type(){

var p = document.getElementById('loading-text');
p.innerHTML = '';
var n = 0;
var str = ' \>_ <br> There is no one who is mindful of what he says except that you will see the good of it in the rest of his actions. <br> <br> >_ <span id="icon-holder"> <a href="home.html#home" onclick="goHome()"> <i class="bi bi-hexagon-fill text-white" id="load-home icon-2"></i>&nbsp; visit navilindo</a> </span>';
var typeTimer = setInterval(function() {
  n = n + 1;
  p.innerHTML = " " + str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = " " + str;
    n = 0;
    setInterval(function() {

      if (n === 0) {
        p.innerHTML = " " + str + ""
        n = 1;
      } else {
        p.innerHTML = " " + str
        n = 0;
      };
    }, 1000);
  };
}, 60);
$(document).trigger('function_a_complete');
}

$(document).ready(function(){
  type();
});

function showHome(){
  
    alert("hi 2");
}

$(document).bind('function_a_complete', showHome);
