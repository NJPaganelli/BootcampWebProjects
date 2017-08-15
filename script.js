// <!-- Home Page -->
// 	$('#home-title-tailor').mouseOver(function(){
// 	$("#home-title-tailor").addClass("home-title-tailor")
// 	$("#title-tailor-text").addClass("title-tailor-text")
// });

var object_to_grab = document.querySelector('#home-title-tailor')

object_to_grab.addEventListener("mouseenter", function(){
  var second = document.querySelector("#title-tailor-text")
  object_to_grab.addClass("home-title-tailor")
  second.addClass("title-tailor-text")
})

preventDefault();



// <!-- Customer Profile -->
// <!-- Measurement Form/Upload -->
// <!-- Tailor Made - Choose Collection -->
// <!-- Tailor Made - Choose a Style -->
// <!-- Tailor Made - Fit Viewport - Check Fit -->
// <!-- Shopping Cart - Tailor MAde & Custom -->
// <!-- Custom - Choose Blank Style or Choose Single Component -->
// <!-- Custom - Choose Single Component - Choose Compatable Components Limited -->
// <!-- Custom - Fit Viewport - Choose Color/Pattern -->
// <!-- Custom - Fit  - Check Fit -->
// <!-- Bespoke - View Base Styles/Select Components -->
// <!-- Bespoke - View Compatable Components Unlimited -->
// <!-- Bespoke - View Colors & Patterns -->
// <!-- Bespoke - Fit Viewport - Edit Base Style - Allow to Skip: Send to "Custom - Fit Viewport - Choose Color/Pattern" -->
// <!-- Bespoke - Fit Viewport - Place Color & Pattern -->
// <!-- Bespoke - Fit Viewport - Check Fit -->
// <!-- Bespoke - Additional Comments Form -->
// <!-- Bespoke - Shopping Cart -->
