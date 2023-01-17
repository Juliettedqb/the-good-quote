async function fetchData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ee7279b9bbmsh7172f99cef0519fp17ca96jsn6ac28430c532',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options);
    const record = await res.json();

    // console.log('record', record);
    //document.getElementById("quotes").innerHTML = record.content;
    //console.log(document)
    //console.log(typeof record.content)

    document.querySelectorAll("img").forEach(e => e.remove());

    console.log(document.querySelectorAll("img"))

    let arr = document.getElementsByClassName("thumbcaption");
    for(let i=0; i<arr.length; i++){
        arr[i].innerText = record.content;
    }


}

fetchData()

