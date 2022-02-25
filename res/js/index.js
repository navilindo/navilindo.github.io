
// function whileLoading(){

// }

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 500);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.final', true);
  setVisible('#loading', false);
});


$( document ).click(function() {
  $( "#toggle" ).toggle( "slide" );
});

{/* function showAbout() {
    $(#aboutBtn).click(function(){
        $(#about-me).toggle( "slide" );
    });    
} */}
// function showAbout(){ 
// $(document).ready(function(){
//   $(".AboutBtn").click(function(){
//     $(#about-me).show();
//   });
// }
