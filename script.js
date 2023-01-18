//fonction qui remplace les images de la page par des lamas
function transformImages() {

    let fileNames = [
        "images/lama_1.jpg",
        "images/lama_2.jpg",
        "images/lama_3.jpg",
        "images/lama_4.jpg",
        "images/lama_5.jpg",
        "images/lama_6.jpg",
        "images/lama_7.jpg",
        "images/lama_8.jpg",
    ];
      
    //on récup tous les éléments qui ont le tag "img" dans la tab ouverte
    let imgs = document.querySelectorAll("img, image");
      
    //on parcourt toutes les images trouvées pour changer leurs URLS
    for (var i =0 ; i < imgs.length ; i++) {
        console.log(imgs[i]);
    
        //on génère une image parmi notre bdd
        let random = Math.floor(Math.random() * fileNames.length);
        let file = fileNames[random];
        let url = file.url ;
        //console.log(file);
        imgs[i].src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.santelog.com%2Fsites%2Fsantelog.com%2Fwww.santelog.com%2Ffiles%2Fimages%2Faccroche%2Fadobestock_276208008_lama.jpeg&f=1&nofb=1&ipt=0c74cb072050685502d5c19b369a6e8586de258daa09d477b81d0d1ca8eadd92&ipo=images";
        //"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.santelog.com%2Fsites%2Fsantelog.com%2Fwww.santelog.com%2Ffiles%2Fimages%2Faccroche%2Fadobestock_276208008_lama.jpeg&f=1&nofb=1&ipt=0c74cb072050685502d5c19b369a6e8586de258daa09d477b81d0d1ca8eadd92&ipo=images"
    }
}

transformImages();


