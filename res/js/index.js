<script>
$( document ).click(function() {
  $( "#toggle" ).toggle( "slide" );
});

function showAbout() {
    $(#aboutBtn).click(function(){
        $(#about-me).toggle( "slide" );
    });    
}

$(document).ready(function(){
  $(".AboutBtn").click(function(){
    $().hide();
    $(#about-me).show()
  });
</script>