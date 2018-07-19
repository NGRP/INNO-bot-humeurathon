$(window).load(function() {

	$('.alert-danger').hide();
	$('.container.comment').hide();
	
	var maxHeight = 0;
	$('.pictures img').each(function() {
		var height = $(this).height();
		maxHeight = Math.max(maxHeight, parseInt(height));
	});

	maxHeight = Math.min(maxHeight, 200);

	$('.pictures .image').each(function() {

		var $image = $(this).find('img'),
			$container = $(this),
			containerWidth = $container.width();

		$(this).css({
			'height': maxHeight+'px',
			'width': containerWidth
		});

		$image.css({
			width: containerWidth,
			height: maxHeight
		});

	});

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
