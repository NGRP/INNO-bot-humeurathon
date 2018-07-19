$(window).load(function() {
	var url = location.href,
		modal = url.substring(url.indexOf('#'));

	if(modal.length > 1) {
		$(modal).modal();
		$(modal).on('hide.bs.modal', function() {
			history.pushState("", document.title, window.location.pathname + window.location.search);
		})
	}
});