$(document).on("pageshow", "#blank", function(event) {		
  				$(".ui-footer").toolbar("show");
});
		
$(document).on("pagebeforeshow", "#howtouse", function(event) {		
  				$(".ui-footer").toolbar("hide");
});

$(document).on("pagebeforeshow", "#materi", function(event) {		
if (materpanel==1) {
  				$("#menyu").panel("open");
  				materpanel=0;
}
});

$(document).on("swiperight", "#materi", function(event) {
	$("#menyu").panel("open");
})

$(document).on("pagebeforeshow", "#petunjuk", function(event) {		
  				$(".ui-footer").toolbar("hide");
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