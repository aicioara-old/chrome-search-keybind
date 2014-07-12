function setContextMenu(show) {
	chrome.contextMenus.removeAll();
	if (show) {
		chrome.contextMenus.create({
			title : "Add shortcut",
			contexts : ["editable"],
			onclick : function(info,tab) {
				queryContentScript(makeAssociation);
			}
		});
	}
}


setContextMenu(true);

function queryContentScript(callback) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {}, function(response) {
			callback(response.page, response.elementSelector);
		});

	});

}

function makeAssociation(page, selector) {
	var regExp = new RegExp('[^?]*');
	var processedPage = page.match(regExp)[0];

	console.log(processedPage);
	console.log(selector);

}
