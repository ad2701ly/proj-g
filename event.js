$(document).on("pageshow", "#blank", function(event) {		
  				$(".ui-footer").toolbar("show");
});
		
$(document).on("pagebeforeshow", "#howtouse", function(event) {		
  				$(".ui-footer").toolbar("hide");
});

$(document).on("pagehide", "#blank", function(event) {		
  				$(".ui-header").toolbar("show");
});
/*
$(document).on("pagebeforeshow", "#simulasi", function(event) {		
			if (helpsim==0) {
  				window.location.replace('#petunjuk');
  				helpsim=1;
			}  				
});
*/
$(document).on("swiperight", function(event) {
	$("#menyu").panel("open");
})





$(document).on("tap","#inter",function (event) {
	window.location.replace('#howtouse');
});


$(document).on("pagebeforeshow", "#petunjuk", function(event) {		
  				$(".ui-footer").toolbar("hide");
});

$(document).on("pagehide", "#petunjuk", function(event) {		
  				$(".ui-footer").toolbar("show");
});


$(document).on("pagebeforeshow", "#simulasi", function(event) {		
  				sh=setInterval(update,1000/30);
});

$(document).on("pagehide", "#simulasi", function(event) {		
  				clearInterval(sh);
});


		
$(document).on("pagebeforeshow","#sol1", function (event) {
			$(".ui-footer").toolbar("hide");
		})
$(document).on("pagebeforeshow","#sol2", function (event) {
			$(".ui-footer").toolbar("hide");
		})
$(document).on("pagebeforeshow","#sol3", function (event) {
			$(".ui-footer").toolbar("hide");
})
$(document).on("pagebeforeshow","#sol4", function (event) {
			$(".ui-footer").toolbar("hide");
})
$(document).on("pagebeforeshow","#sol5", function (event) {
			$(".ui-footer").toolbar("hide");
})

$(document).on("pagebeforehide","#sol1", function (event) {
			$(".ui-footer").toolbar("show");
})
$(document).on("pagebeforehide","#sol2", function (event) {
			$(".ui-footer").toolbar("show");
})
$(document).on("pagebeforehide","#sol3", function (event) {
			$(".ui-footer").toolbar("show");
})
$(document).on("pagebeforehide","#sol4", function (event) {
			$(".ui-footer").toolbar("show");
})
$(document).on("pagebeforehide","#sol5", function (event) {
			$(".ui-footer").toolbar("show");
})