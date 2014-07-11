var matches = {
	"exchange" : "#txtSch",
	"facebook" : "._586i",
	"www.google" : "#gbqfq",
	"dropbox" : "#browse-search-input",
	"github" : "#js-command-bar-field"
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


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var activeElement = document.activeElement;
	var selector = "input";
	if (activeElement.id) {
		selector = "#" + activeElement.id;
	} else if (activeElement.class) {
		selector = "." + activeElement.class;
	}

	sendResponse({
		page: document.location.href,
		elementSelector: selector
	});
});
