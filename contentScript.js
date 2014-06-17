var matches = {
	"exchange" : "#txtSch",
	"facebook" : "asd"
}

$(document).keydown(function(e, f) {
	if (e.keyCode == 83 && e.altKey) {
		processURL();
	}
});

function processURL() {

	var url = window.location.href;

	for (var key in matches) {
		var regExp = new RegExp(key, 'g');
		if (url.match(regExp)) {
			focusOnSearchBar(matches[key])
			return;
		}
	}
}

function focusOnSearchBar($selector) {
	$($selector).focus();
}