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

chrome.extension.sendRequest({}, function(response) {});

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		countWords();
		clearInterval(readyStateCheckInterval);
	}
}, 10);

function countWords() {
	var pageCount = 0;
	var divs = document.getElementsByTagName('div'), i;
	for (i in divs) {
		if((" " + divs[i].className + " ").indexOf(" kix-page ") > -1) { pageCount++; }
	}
	var wordCount = 0;
	var spans = document.getElementsByTagName('span'), i; 
	for (i in spans) {
		if((" " + spans[i].className + " ").indexOf(" kix-lineview-text-block ") > -1) {
			var words = spans[i].innerText.replace(/W+/g, ' ').match(/S+/g);
			wordCount += words &&
			words.length || 0;
		}
	}
	document.getElementById('wordsTotal').innerText = pageCount + ' pages, ' + wordCount + ' total words';
	timeout = setTimeout('countWords()', 5000);
}
