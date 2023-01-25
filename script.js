//listening to changes in chrome local storage
chrome.storage.onChanged.addListener(() => {
  //checking toggle value
  chrome.storage.local.get(["toggle"]).then((result) => {
    //console.log(result.toggle)
    if (result.toggle == true) {
      //launching script functionalities
      fetchData();
      transformImages();
    } else {
      //removing quote
      newElement.remove();
    }
  });
});

//set function to replace images with llamas and add random facts
function transformImages() {
  let fileNames = [
    "https://static.cnews.fr/sites/default/files/lama_morbihan.jpg",
    "https://www.ulyces.co/wp-content/uploads/2020/05/399584ebc7_50163211_lama-coronavirus.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.santelog.com%2Fsites%2Fsantelog.com%2Fwww.santelog.com%2Ffiles%2Fimages%2Faccroche%2Fadobestock_276208008_lama.jpeg&f=1&nofb=1&ipt=0c74cb072050685502d5c19b369a6e8586de258daa09d477b81d0d1ca8eadd92&ipo=images",
    "https://cdn.unitycms.io/images/Cht3iDIcq8P9rEIu6Xhq3t.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=e0CkgIXKHLU",
    "https://animalaxy.fr/wp-content/uploads/2019/06/lama-3305366_1280.jpg",
    "https://cdn.radiofrance.fr/s3/cruiser-production/2019/01/0e59c823-71d4-4ac2-a40c-089672fd6b11/870x489_maxnewsfrfour150785.jpg",
    "https://s1.1zoom.me/big0/582/371075-sepik.jpg",
    "https://lamontagnedeslamas.fr/wp-content/uploads/2021/12/SECTION-2-copie-2.jpg",
    "https://d2i94jcvhd3nst.cloudfront.net/wp-content/uploads/2016/11/TL354_lama_161114_4440-1140x760.jpg",
    "https://www.onefm.ch/wp-content/uploads/2019/02/courrier-international-clonage-alpagas-1000x600.jpg",
    "https://i.pinimg.com/736x/e3/b4/4f/e3b44fb1fe7e62860431aa4c1cb9c0e0.jpg",
    "https://i.pinimg.com/736x/a0/6f/31/a06f31493ac0c8baf3917dca945b959c--bae-quotes-sad-faces.jpg",
    "https://www.banjotours.com/image/cache/catalog/blog/funny-spitting-llama-600x315w.jpg",
    "https://cdn-s-www.leprogres.fr/images/3E9A5EA5-6BEA-4043-AB1F-7B6032CFDFD3/MF_contenu/pourquoi-les-lamas-representent-un-espoir-dans-la-lutte-contre-le-virus-1632389918.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Llama_de_Bolivia_%28pixinn.net%29.jpg/435px-Llama_de_Bolivia_%28pixinn.net%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Lama_glama_Laguna_Colorada_2.jpg",
  ];

  let facts = [
    "Le lama dispose de 74 chromosomes",
    "Le lama rumine mais n'est pas classé parmi les ruminants",
    "Le crachat du lama est constitué d'une sorte de nébulisation salivaire qu'il projette sur l'objet de sa colère",
    "Le lama est doux",
    "Le lama a de grandes dents",
    "L'espèce Lama glama a été décrite pour la première fois en 1758 par le naturaliste suédois Carl von Linné ",
    "Liste des sous espèces de lama glama : cacsilensis, glama, guanicoe",
  ];

  //stocking all elements tagged as img or image
  let imgs = document.querySelectorAll("img, image");

  //looping through array [imgs]
  for (var i = 0; i < imgs.length; i++) {
    //generating an integer random number in range of array [fileNames]
    const random = Math.floor(Math.random() * fileNames.length);
    const file = fileNames[random];
    //replacing actual tab images with llama images
    imgs[i].src = file;
    imgs[i].srcset = file;

    //adding random facts about llamas
    const randomBis = Math.floor(Math.random() * facts.length);
    const randomFacts = facts[randomBis];
    //creating the element which will appear later (line 71)
    const text = document.createElement("p");
    text.innerHTML = randomFacts;

    //these facts appear when the mouse enters the image and disappear when the mouse leaves the image
    imgs[i].addEventListener("mouseenter", (e) => {
      e.currentTarget.parentNode.insertBefore(
        text,
        e.currentTarget.nextSibling
      );
    });
    imgs[i].addEventListener("mouseleave", (e) => {
      text.remove();
    });
  }
}

//set function to fetch data from the Quotes API
async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ee7279b9bbmsh7172f99cef0519fp17ca96jsn6ac28430c532",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  const res = await fetch(
    "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
    options
  );
  //switching data in json format
  const record = await res.json();

  //calling injectQuote function
  //adding an plan B if quote is undefined
  if (record.content == undefined) {
    injectQuote("This lifechanging product is brougth to you by the spice girls of tech, Juliette, Manon and Alice. Be proud. Carpe diem...");
  } else {
    injectQuote(record.content);
  }
}

//set function to create element that will display quotes
function injectQuote(quote) {
  //creating html stuff
  const newElement = document.createElement("div");
  newElement.className = "newQuote";
  newElement.id = "newElement";

  const host = document.createElement("h3");
  host.innerHTML = quote;

  const divQuote = document.createElement("div");
  divQuote.className = "divQuote";

  newElement.appendChild(divQuote);
  divQuote.appendChild(host);
  document.body.appendChild(newElement);

  //importing "Parisienne" font
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute(
    "href",
    "https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
  );
  document.head.appendChild(link);

  //styling quote
  newElement.style.zIndex = "100000";
  newElement.style.position = "fixed";
  newElement.style.width = "100%";
  newElement.style.top = "23%";

  host.style.color = "white";
  host.style.textAlign = "center";
  host.style.padding = "60px";
  host.style.fontFamily = "'Parisienne', cursive";
  host.style.fontSize = "xxx-large"

  divQuote.style.background = "linear-gradient(#60cde0, #eaa5ae)";
  divQuote.style.width = "50%";
  divQuote.style.margin = "auto";
  divQuote.style.borderRadius = "50px";
  divQuote.style.boxShadow = "1px 5px 10px 1px #c3bebe";
}
