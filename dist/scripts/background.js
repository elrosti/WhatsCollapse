"use strict";function checkForValidUrl(a,b,c){0==c.url.indexOf("http://web.whatsapp.com")&&chrome.pageAction.show(a)}chrome.tabs.onUpdated.addListener(checkForValidUrl);