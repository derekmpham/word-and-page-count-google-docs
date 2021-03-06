var xhReq = new XMLHttpRequest();
xhReq.onreadystatechange = function onSumResponse() {
	if (xhReq.readyState == 4) {
		var serverResponse = xhReq.responseText;
		var body = document.getElementsByTagName("body")[0];
		var div = document.createElement('div');
		div.innerHTML = serverResponse;
		body.appendChild(div);
	}
}
xhReq.open("GET", chrome.extension.getURL("statusbar.html"), true);
xhReq.send(null);

var options;
chrome.extension.sendRequest({}, function(response) {options = response;
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			countWords();
			clearInterval(readyStateCheckInterval);
		}
	}, 10);
	var statusbar = document.getElementById('statusBar');
	statusbar.className = options.themepicker;
});

function countWords() {
	var wordCount = 0;
	var pageCount = 0;

	var message = '';

	if (options.pagecounter) {
		var divs = document.getElementsByTagName('div'), i;
		for (i in divs) {
			if((" " + divs[i].className + " ").indexOf(" kix-page ") > -1) {
				pageCount++;
			}
		}
		message += pageCount + ' pages';
	}

	if (options.wordcounter) {
		var spans = document.getElementsByTagName('span'), i;
		for (i in spans) {
			if((" " + spans[i].className + " ").indexOf(" kix-lineview-text-block ") > -1) {
				var words = spans[i].innerText.replace(/\W+/g, ' ').match(/\S+/g);
				wordCount += words && words.length || 0;
			}
		}
		if (message != '') {message += ', ';}
		message += wordCount + ' words total';
	}

	document.getElementById('wordsTotal').innerText = message;

	timeout = setTimeout('countWords()', 5000);
}
