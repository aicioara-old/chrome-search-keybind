function addToStorage(processedPage, selector, ticked) {
	chrome.storage.sync.get('chrome-search-keybind', function(old) {
		if (old["chrome-search-keybind"]) {
			var newItem = old["chrome-search-keybind"];
		} else {
			var newItem = {};
		}
		var obj = {
			"selector" : selector,
			"ticked" : ticked
		}
		newItem[processedPage] = obj;

		chrome.storage.sync.set({'chrome-search-keybind' : newItem}, function(e) {

		})

	})
}

function getStorage(callback) {
	chrome.storage.sync.get('chrome-search-keybind', function(storage) {
		callback(storage);
	})
}