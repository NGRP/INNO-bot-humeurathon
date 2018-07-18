$(window).load(function() {
	$('.alert-danger').hide();
	$('.container.comment').hide();
	$('.choose-image').click(function() {
		$('#photoInput').val($(this).data('picture'));
		$(".container.mood").hide();
		$(".container.comment").show();
	});

	$('#commentForm').submit(function(event) {
		event.preventDefault();

		$.post($(this).attr('action'), $(this).serialize())
		.success(function(data) {
			if(data.redirect) {
				location.href = data.redirect;
			}
		}).fail(function(xhr, textStatus, errorThrown) {
            $('.alert-danger').hide();
            if(xhr.status === 403) {
                $('#forbiddenAlert').show();
            } else if(xhr.status === 400) {
            	$('#unknownError').show()
            }
        })
	})
})