$(document).on("pageshow", "#blank", function(event) {		
  				$(".ui-footer").toolbar("show");
});
		
$(document).on("pagebeforeshow", "#howtouse", function(event) {		
  				$(".ui-footer").toolbar("hide");
});

$(document).on("pagebeforeshow", "#petunjuk", function(event) {		
  				$(".ui-footer").toolbar("hide");
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
