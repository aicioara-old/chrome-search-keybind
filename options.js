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

	table.append(displayRow(tickedOption, selectorOption, processedPageOption));
}

function displayRow(opt1, opt2, opt3) {
	var row = $("<tr>");

	var col1 = $("<td>").append(opt1);
	var col2 = $("<td>").append(opt2);
	var col3 = $("<td>").append(opt3);

	row.append(col1).append(col2).append(col3);

	return row;
}

function displaySubmitButton() {
	var button = $("<button>");
	button.html("Submit");

	button.click(function() {
		console.log('a')
	});

	buttonPlace.append(button);
}