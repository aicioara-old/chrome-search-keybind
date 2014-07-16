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


	// var url = "options.html?" + "page='" + processedPage + "'&selector='" + selector + "'";
	var url = "options.html";

	var urlToOpen = chrome.extension.getURL(url);


	chrome.tabs.query({'windowId':chrome.windows.WINDOW_ID_CURRENT}, function(tabList) {
		for(var i = 0; i < tabList.length; i++) {
			var cTab = tabList[i];
			if(cTab.url.indexOf(urlToOpen) == 0) {
				chrome.tabs.update(cTab.id, {
					'selected': true
				});
				return;
			}
		}
		chrome.tabs.create({
			'url': urlToOpen
		});
	});

	console.log(processedPage);
	console.log(selector);
}


// var x = chrome.storage.sync.get('value', function(e) {
// 	console.log (e);
// });

// chrome.storage.sync.set({'value': 2}, function() {
// 	console.log('Settings saved');
// });

addToStorage('microsoft', '#asd', true);
// addToStorage('google', '#def', true);

setTimeout (function() {
	getStorage(function(e) {
		console.log(e);
	})
}, 3000)

// chrome.storage.sync.set({'chrome-search-keybind' : null}, function(e) {})
