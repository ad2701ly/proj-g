$(document).on("pagebeforeshow", "#blank", function(event) {		
  				$(".ui-footer").toolbar("show");
});
		
$(document).on("pagecreate", "#blank", function(event) {
  				window.location.replace("#howtouse");
  				$(".ui-footer").toolbar("hide");
});

$(document).on("pagebeforeshow","#latihan", function (event) {
			$(".ui-footer").toolbar("show");
})		
		
$(document).on("pagecreate","#sol1", function (event) {
			$(".ui-footer").toolbar("hide");
		})
$(document).on("pagecreate","#sol2", function (event) {
			$(".ui-footer").toolbar("hide");
		})
$(document).on("pagecreate","#sol3", function (event) {
			$(".ui-footer").toolbar("hide");
})
$(document).on("pagecreate","#sol4", function (event) {
			$(".ui-footer").toolbar("hide");
})
$(document).on("pagecreate","#sol5", function (event) {
			$(".ui-footer").toolbar("hide");
})