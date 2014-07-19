var table = $("#tablePlace");
var buttonPlace = $("#buttonPlace")


displayTableHeader();
displayFirstColumn();
displayAllColumns();
displaySubmitButton();


function displayTableHeader() {
	table.append(displayRow("Active", "Page matching", "jQuery selector"));
}

function displayFirstColumn() {

	var tickedOption = $('<input>', {
		type: "checkbox",
	});

	var selectorOption = $('<input>', {
		type: "text",
	});

	var processedPageOption = $('<input>', {
		type: "text",
	});

	table.append(displayRow(tickedOption, selectorOption, processedPageOption));
}


function displayAllColumns() {
	getStorage(function(storage) {
		storage = storage["chrome-search-keybind"];
		console.log(storage);
		for (key in storage) {
			displayOption (key, storage[key].selector, storage[key].ticked)
		}
	});
}

function displayOption(processedPage, selector, ticked) {

	var tickedOption = $('<input>', {
		type: "checkbox",
		checked: ticked
	});

	var selectorOption = $('<input>', {
		type: "text",
		value: selector
	});

	var processedPageOption = $('<input>', {
		type: "text",
		value: processedPage
	});

	var deleteButton = $("<button>", {
		type: "button"
	});
	deleteButton.html("Delete")
	deleteButton.click(function() {
		deleteFromStorage(processedPage);
	})

	var newRow = displayRow(tickedOption, processedPageOption, selectorOption, deleteButton);

	deleteButton.click(function() {
		newRow.detach();
	})

	table.append(newRow);
}

function displayRow() {
	var row = $("<tr>");

	for (var i = 0; i < arguments.length; i++) {
		var col = $("<td>").append(arguments[i]);
		row.append(col);
	}

	return row;
}

function displaySubmitButton() {
	var button = $("<button>");
	button.html("Save");

	button.click(function() {
		console.log('a')
	});

	buttonPlace.append(button);
}