//on attend que la page soit fully loadée pour faire des trucs
document.addEventListener('DOMContentLoaded', function (){  
    //on écoute le bouton pour créer l'objet
    document.querySelector('button').addEventListener('click', onclick, false) 
    function onclick(){
        //au click du bouton, on créé l'objet dans le storage 
        //pour pouvoir écouter le changement dans le script.js
        chrome.storage.local.set({
            status: objVerif = {
              value: true
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

