var baseUrl = "http://" + location.host;

$("[data-action='shutdown'] button").on("tap", function() {
	var second = $(this).attr('data-second');
	$.ajax({
		url: baseUrl + '/cmd/shutdown/' + second,
		type: 'post'
	})
})

$("[data-action='volume'] button").on("tap", function() {
	var delta = $(this).attr('data-delta');
	$.ajax({
		url: baseUrl + '/cmd/volume/' + delta,
		type: 'post'
	})
})

$("[data-action='music'] button").on("tap", function() {
	var action = $(this).attr('data-action');
	$.ajax({
		url: baseUrl + '/cmd/music/' + action,
		type: 'post'
	})
})