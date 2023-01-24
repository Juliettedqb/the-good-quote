//on attend que la page soit fully loadée pour faire des trucs
document.addEventListener('DOMContentLoaded', function (){  
    //on écoute le bouton pour créer l'objet
    //document.querySelector('button').addEventListener('click', onclick, false) 
    document.querySelector('.toggle').addEventListener('click', onclick) 
    chrome.storage.local.set({toggle: false})

    function onclick(){
        //au click du bouton, on créé l'objet dans le storage 
        //pour pouvoir écouter le changement dans le script.js
        // chrome.storage.local.set({
        //     status: objVerif = {
        //       value: true
        //     }
        //   })

        //changement de la valeur de "toogle"
        //pour pouvoir écouter le changement dans le script.js
        chrome.storage.local.get(["toggle"]).then((result) => {
          console.log("le toggle est" + result.toggle);
      
          if (result.toggle == false){ 
              console.log("toggle if =" + result.toggle);
              chrome.storage.local.set({toggle: true})
              
          } else {
              console.log("toggle else = " + result.toggle);
              chrome.storage.local.set({toggle: false})
          }
      })

    };

}, false);


//bouton toggle
// document.addEventListener('DomContentLoaded', function(){
//   document.getElementById('switch').addEventListener('click', onClick,)
//   function toggle(){
//     var active = true;
//     if (x){

//     }
//   }
// })

