//on écoute le changement du storage déclenché par le bouton de la popup
chrome.storage.local.onChanged.addListener((changes, local) => {
    //puis on lance les quotes + les lamas
    fetchData();
    transformImages();
})

//fonction qui remplace les images de la page par des lamas
function transformImages() {

    let fileNames = [
        "https://static.cnews.fr/sites/default/files/lama_morbihan.jpg",
        "https://www.ulyces.co/wp-content/uploads/2020/05/399584ebc7_50163211_lama-coronavirus.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.santelog.com%2Fsites%2Fsantelog.com%2Fwww.santelog.com%2Ffiles%2Fimages%2Faccroche%2Fadobestock_276208008_lama.jpeg&f=1&nofb=1&ipt=0c74cb072050685502d5c19b369a6e8586de258daa09d477b81d0d1ca8eadd92&ipo=images",
        "https://cdn.unitycms.io/images/Cht3iDIcq8P9rEIu6Xhq3t.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=e0CkgIXKHLU",
        "https://animalaxy.fr/wp-content/uploads/2019/06/lama-3305366_1280.jpg",
        "https://cdn.radiofrance.fr/s3/cruiser-production/2019/01/0e59c823-71d4-4ac2-a40c-089672fd6b11/870x489_maxnewsfrfour150785.jpg",
        "https://s1.1zoom.me/big0/582/371075-sepik.jpg"
    ];
      
    //on récup tous les éléments qui ont le tag "img" ou "image" dans la tab ouverte
    let imgs = document.querySelectorAll("img, image");
      
    //on parcourt toutes les images trouvées pour changer leurs URLS
    for (var i =0 ; i < imgs.length ; i++) {
    
        //on génère une image parmi notre bdd
        let random = Math.floor(Math.random() * fileNames.length);
        let file = fileNames[random];
        imgs[i].src = file;
        imgs[i].srcset = file;

        var text = document.createElement("p");
        text.innerHTML = "lamus lamus";
        imgs[i].parentNode.insertBefore(text, imgs[i].nextSibling);
    }
}

transformImages();

//fonction qui récup les données de l'API quote
//et qui les injecte dans la popup html
async function fetchData(){
    console.log("*********************HELLO***************************")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ee7279b9bbmsh7172f99cef0519fp17ca96jsn6ac28430c532',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
        
    const res = await fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
    //transfo des données en json
    const record = await res.json();

    //on appelle la fonction qui créé l'élement
    injectQuote(record.content);
}

//fonction qui créé une nouvelle div html dans laquelle on met la quote
function injectQuote(quote) {
    const newElement = document.createElement("div");
    newElement.className = "newQuote";
    const host = document.createElement("h3");
    host.innerHTML = quote;
    newElement.appendChild(host);
    document.body.appendChild(newElement);

    console.log(newElement);
    //css de la quote
    newElement.style.zIndex = "10000000";
    newElement.style.fontSize = "40px"
}

fetchData();
