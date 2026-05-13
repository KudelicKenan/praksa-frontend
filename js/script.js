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

// 1. Hardcoded baza podataka
const vozaci = [
    {
        id: 1,
        ime: "Max Verstappen",
        tim: "Red Bull Racing",
        titule: 3,
        opis: "Trostruki svjetski šampion poznat po agresivnom stilu i nevjerovatnoj brzini.",
        slika: "images/max.jpg"
    },
    {
        id: 2,
        ime: "Lewis Hamilton",
        tim: "Scuderia Ferrari",
        titule: 7,
        opis: "Statistički najuspješniji vozač u historiji sa 103 pobjede i 7 titula.",
        slika: "images/hamilton.jpg"
    },
    {
        id: 3,
        ime: "Charles Leclerc",
        tim: "Scuderia Ferrari",
        titule: 0,
        opis: "Predvodnik Ferrarija i jedan od najboljih vozača u kvalifikacijama na gridu.",
        slika: "images/leclerc.jpg"
    }
];

function prikaziVozace() {
    const lista = document.getElementById('vozaci-lista');
    if(!lista) return;

    lista.innerHTML = ""; 
    vozaci.forEach(vozac => {
        const kartica = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100">
                    <img src="${vozac.slika}" class="card-img-top" alt="${vozac.ime}">
                    <div class="card-body text-center">
                        <h5 class="card-title" style="color: #222;">${vozac.ime}</h5>
                        <p class="card-text text-muted">${vozac.tim}</p>
                        <button class="btn btn-danger btn-sm" onclick="prikaziDetalje(${vozac.id})">
                            Pogledaj detalje
                        </button>
                    </div>
                </div>
            </div>
        `;
        lista.innerHTML += kartica;
    });
}

function prikaziDetalje(id) {
    const vozac = vozaci.find(v => v.id == id);
    
    if(vozac) {
        const naslov = document.getElementById('modalVozacIme');
        const tijelo = document.getElementById('modalVozacOpis');

        if(naslov && tijelo) {
            naslov.innerText = vozac.ime;
            tijelo.innerHTML = `
                <div class="text-dark">
                    <p><strong>Tim:</strong> ${vozac.tim}</p>
                    <p><strong>Broj titula:</strong> ${vozac.titule}</p>
                    <hr>
                    <p>${vozac.opis}</p>
                </div>
            `;

            const modalElement = document.getElementById('detaljiModal');
            const instancaModala = bootstrap.Modal.getOrCreateInstance(modalElement);
            instancaModala.show();
        }
    }
}

document.addEventListener('DOMContentLoaded', prikaziVozace);