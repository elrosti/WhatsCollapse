

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	console.log("prueba")
	// If the tabs url starts with "http://specificsite.com"...
	if (tab.url.indexOf('https://web.whatsapp.com') == 0) {
		// ... show the page action.
		chrome.pageAction.show(tabId);
	}
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener( function (tab) {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        	chrome.tabs.sendMessage(tabs[0].id, {action: "collapse"}, function(response) {});  
      	});
	}
);