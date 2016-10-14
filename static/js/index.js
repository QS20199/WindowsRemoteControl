$(".shutdown button").on("tap", function() {
	var second = $(this).attr('data-second');
	$.ajax({
		url: 'http://localhost:3000/cmd/shutdown/' + second,
		type: 'post'
	})
})