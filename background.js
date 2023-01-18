chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(changeInfo.status == 'complete'){
    chrome.scripting.executeScript({
      files: ["content.js"],
      target: {tabId: tab.id}
    })
  }
});

// fonction executé à l'installation ou mise à jour de l'extension
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "On",
    });
  });

/*// fonction executé au chargement d'une page web
chrome.webNavigation.onCompleted.addListener(function(){
  //alert("Tu as chargé une nouvelle page !");
}*/
