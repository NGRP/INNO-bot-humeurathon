$(window).load(function() {
	$('.container.comment').hide();
	$('.choose-image').click(function() {
		$('#photoInput').val($(this).data('picture'));
		$(".container.mood").hide();
		$(".container.comment").show();
	});
})