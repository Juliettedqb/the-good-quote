//waiting for the page to be fully loaded
document.addEventListener('DOMContentLoaded', function (){  
    //listening to know if the button is clicked
    document.querySelector('.toggle').addEventListener('click', onclick) 
    //set the object in the storage
    chrome.storage.local.set({toggle: false})

    function onclick(){
        //get the value of toggle and set it to reverse
        chrome.storage.local.get(["toggle"]).then((result) => {
          //console.log("le toggle est" + result.toggle);
      
          if (result.toggle == false){ 
              //console.log("toggle if =" + result.toggle);
              chrome.storage.local.set({toggle: true})
              
          } else {
              //console.log("toggle else = " + result.toggle);
              chrome.storage.local.set({toggle: false})
          }
      })

    };

});
