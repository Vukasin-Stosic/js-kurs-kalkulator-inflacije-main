function inflationCalculator() {

    let stopa = parseFloat(document.querySelector("#inflationRate").value);
    let iznos = parseFloat(document.querySelector("#money").value);
    let godine = parseFloat(document.querySelector("#years").value);

    let rezultat = iznos + iznos * stopa / 100;

    for (let i = 1; i < godine; i++ ) {

        rezultat += rezultat * stopa / 100;

    }
    
    rezultat = rezultat.toFixed (2);

    let recenica = document.createElement ('div');
    //recenica.className = '.recenica';
    recenica.innerText = `Danasljih ${iznos}€ vredece kao ${rezultat}€ za ${godine} godina.`;

   document.querySelector('.container').appendChild(recenica);
}