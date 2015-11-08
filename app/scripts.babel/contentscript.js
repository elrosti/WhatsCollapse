chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
   if (msg.action == 'collapse') {
      var photos=document.getElementsByClassName('image-thumb');
      for(var i=0;i<photos.length;i++){
      	//photos[i].style.display='none';
      	photos[i].innerHTML = '<div><p> Image has been blocked </p></div>'
      }
   }
});