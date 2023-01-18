//on attend que la page soit fully loadée pour faire des trucs
document.addEventListener('DOMContentLoaded', function (){  
    //on génère la quote au click du bouton
    document.querySelector('button').addEventListener('click', onclick, false) 
    function onclick(){
        //au click du bouton 'yes please' on load les quotes
        fetchData();
    };

}, false);

//fonction qui récup les données de l'API quote
//et qui les injecte dans la popup html
async function fetchData(){
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

    //on injecte les quotes récupérées dans l'élément html 'quotes'
    document.getElementById("quotes").innerHTML = record.content;
}