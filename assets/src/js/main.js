

$(function() {
	myBtn.onclick = function() {
		var seconds = 5;
		var timerId = setInterval(function tick() {
			if (seconds == 0) {
				$('.btn-container').addClass('hidden');
				$('.main').removeClass('hidden');
				clearInterval(timerId);
			}
			$('.btn-container').html('<h1>' + seconds + '</h1>');
			seconds -= 1;
		}, 1000);
	}
});