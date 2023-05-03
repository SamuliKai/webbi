//lisätään kuuntelija elementti
document.getElementById("submit").addEventListener("click", addNote);
//Haetaan dokumentin elementit


let note = document.getElementById("muistiinpanot");
let checkbox = document.getElementById("important");
let viesti = document.getElementById("muistiinpano");
let aika = new Date();
let nimi = document.getElementById("nimi");


//luodaan functio addNote
function addNote() {

    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    p.textContent = nimi.value+":" + " " + viesti.value + " " + aika;


    // onko checkboxissa täppi vai ei
    if(checkbox.checked){
        h3.classList.add("important");
        p.classList.add("important");
    }
    //kaikki elementit bodyn sisälle
    note.append(h3,p,document.createElement("hr"));
    
}


