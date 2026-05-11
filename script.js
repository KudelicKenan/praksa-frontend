const heroButton = document.querySelector('#hero button');
const heroText = document.querySelector('#hero p');
const contactBox = document.querySelector('#kontakt .col-md-6');

function promijeniHeroTekst() {
    heroText.textContent = "Pripremite se za najbržu sezonu do sada! Kalendar utrka je osvježen.";
    heroText.style.color = "#ff4d4d"; 
    console.log("Tekst je uspješno promijenjen!");
}

heroButton.addEventListener('click', function() {
    promijeniHeroTekst();
    
    alert("Hvala što pratite F1 SpeedZone!");
});

contactBox.addEventListener('dblclick', () => {
    contactBox.style.backgroundColor = "#e10600";
    contactBox.style.color = "white";
});