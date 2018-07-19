$(window).load(function() {
	var url = location.href,
		hash = url.indexOf('#'),
		modal = url.substring(hash);

	if(hash !== -1 && modal.length > 1) {
		$(modal).modal();
		$(modal).on('hide.bs.modal', function() {
			history.pushState("", document.title, window.location.pathname + window.location.search);
		})
	}

	if($('#welcome').length === 1) {
		$('#welcome').modal({ backdrop: 'static', keyboard: false });
	}
});