Query(document).ready(function() {
	$('.launch-modal').on('click', function(ev){
		ev.preventDefault();
		 var modalid = $(this).data("target");
		 var url = $(this).attr("href");
		 $(modalid).modal("show");
		$( '#' + $(this).data('modal-id') ).modal();
	});

});
