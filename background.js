function setContextMenu(show) {
	chrome.contextMenus.removeAll();
	if (show) {
		chrome.contextMenus.create({
			"title": "Add shortcut",
			"contexts":["all"],
			"onclick":function(info,tab) {
				console.log('hi');
				// showPopup(info,tab);
			}
		});
	}
}


setContextMenu(true);