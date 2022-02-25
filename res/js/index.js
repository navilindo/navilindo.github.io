
function whileLoading(){

}

$( document ).click(function() {
  $( "#toggle" ).toggle( "slide" );
});

{/* function showAbout() {
    $(#aboutBtn).click(function(){
        $(#about-me).toggle( "slide" );
    });    
} */}
function showAbout(){ 
$(document).ready(function(){
  $(".AboutBtn").click(function(){
    $(#about-me).show();
  });

