
// function whileLoading(){

// }

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function(){
  setVisible('#home', true);
  setVisible('#loading', false);
});


$( document ).click(function() {
  $( "#toggle" ).toggle( "slide" );
});

function showHome(){
    setVisible('#home', true);
    setVisible('#loading', false);
}

function showAbout() {   
  $('#home').hide("slow", function);
  setVisible('#about-me', true);
}
// function showAbout(){ 
// $(document).ready(function(){
//   $(".AboutBtn").click(function(){
//     $(#about-me).show();
//   });
// }
