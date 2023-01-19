console.log('coucou boubou');

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo.status == 'complete'){
      chrome.scripting.executeScript({
        files: ['script.js'],
        target: {tabId: tab.id}
      })
      //on rajoute un clear du storage au lancement de l'extension
      chrome.storage.local.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    });
    }
  });