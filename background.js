chrome.tabs.onActiveChange.addListener(function(details) {
	alert("testing123");
    chrome.tabs.executeScript(null,{file:"blocker.js"});
});