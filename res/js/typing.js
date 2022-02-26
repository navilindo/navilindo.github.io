var p = document.getElementById('loading-text');
p.innerHTML = '';
var n = 0;
var str = ' \>_ <br> There is no one who is mindful of what he says except that you will see the good of it in the rest of his actions. <br> <br> >_ ';
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
    }, 500);
  };
}, 60)

