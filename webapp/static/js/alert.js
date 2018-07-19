$(window).load(function() {
	$.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );

	$('.collapse').each(function() {
		$(this).on('show.bs.collapse', function() {
			$('.collapse:not(#'+$(this).attr('id')+')').collapse('hide');
		});

		$(this).find('.list-group-item-action').click(function() {
			var input = $(this).data('value-for');
			$(input).val($(this).data('value'));

			$(input+'Span').html($(this).html());

			$(input+'Span').addClass('selected');
			$('.collapse').collapse('hide');
		})
	});
	$('#dateInput').datepicker({

		onSelect: function(text, datepicker) {
			var date = new Date(datepicker.selectedYear, datepicker.selectedMonth, datepicker.selectedDay);
			$("#dateInputSpan").html($.datepicker.formatDate( "d MM yy", date ));
			$('#dateInputHidden').val(date.toISOString());
			$("#dateInputSpan").addClass('selected');
		}
	});
	$("#dateInputSpan").click(function() {
		$('#dateInput').show().focus().hide();
		$('.collapse').collapse('hide');
	})


	$('#alertForm').submit(function(event) {
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
});