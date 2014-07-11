function setContextMenu(show) {
	chrome.contextMenus.removeAll();
	if (show) {
		chrome.contextMenus.create({
			"title" : "Add shortcut",
			"contexts" : ["editable"],
			onclick : function(info,tab) {
				queryContentScript(function(a, e) {
					console.log(a, e);
				});
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


