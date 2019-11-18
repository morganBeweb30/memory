
function placerCartes() {
    document.getElementById('gagne').className='d-none';
    document.getElementById('table').className='';
    document.getElementsByTagName('td').className='cases vert';
    document.getElementById('overlay').className='heigth0';
    let cartes = ['1','1','2','2','3','3','4','4','5','5','6','6'];
    let ids = ['a0','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11']
   
    for(let i=0;i<cartes.length;i++) {

        let j = Math.floor(Math.random() * ids.length);

//        document.getElementById('msg').innerHTML+=j;       //affiche le tirage
        document.getElementById(ids[j]).innerHTML='<img id="img'+ids[j]+'" src="./captures/jimag'+cartes[i]+'.gif">';  // 
            //affiche la carte dans la case ids[j] pour vérif
        ids.splice(j,1);                                    //supprime la case remplie
//        document.getElementById('msg').innerHTML+=' '+JSON.stringify(ids)+'<br>';      //affiche les cases restatnes pour vérif
        document.getElementById('nouvPartie').className='d-none';      // enlève bouton "nouvelle partie"
    }
}
// placerCartes();
/*
function test(value) {
    console.log(value); //afiche bonjour dans la console
}
*/
let cpt=0;
let premCase='';
let deuzCase='';
let premCarte='';
let deuzCarte='';
let tds=document.querySelectorAll('td');
let cartesTrouvees = 0;
let cartesRestantes;

function montrerUneCarte(value) {
    document.getElementsByTagName('td')[value].className='affich';
    let imgIdValue='imga'+value;
    let tdIdValue='a'+value;
    
//    document.getElementById('msg').innerHTML=value;

    cpt+=1;
//    document.getElementById('msg').innerHTML+=premCase; // value de la case
    if(cpt%2!==0) {     // 1 carte retournée
        premCase=document.getElementById(tdIdValue);
        premCarte=document.getElementById(imgIdValue).src; // chemin de l'image de la case cliquée dans variable deuzCarte
        document.getElementById('msg').innerHTML='Cliquer sur une autre carte';
//        document.getElementById('msg').innerHTML+=' '+premCarte+' cliquer sur une autre carte';
//        document.getElementById('msg').innerHTML+=' case : '+premCase+'<br>';
    } else {    /**** mettre 1 seconde avant overlay ****/
        deuzCase=document.getElementById(tdIdValue);
        deuzCarte=document.getElementById(imgIdValue).src; // chemin de l'image de la case cliquée dans variable deuzCarte
        document.getElementById('msg').innerHTML='Test des 2 cartes';
//        document.getElementById('msg').innerHTML+=' '+deuzCarte+' tester les 2 cartes';
//        document.getElementById('msg').innerHTML+=' case : '+deuzCase+'<br>';
        myVar = setTimeout(blocClic, 500);
        function blocClic() {
            document.getElementById('overlay').className='height400';   // interdire clic sur tableau
        }
        // si pas les mêmes : les recacher
        if(premCarte !== deuzCarte) {
            document.getElementById('cacherCartes').className='d-block';
            document.getElementById('supprCartes').className='d-none';
//            document.getElementById('msg').innerHTML+=' '+premCarte+' != '+deuzCarte+' les 2 cartes sont !=';
        } else {    //si les mêmes : les supprimer, ajouter 2 à la variable (array) cartesTrouvees, et vérif si array cartesTrouvees.length === 12.
            document.getElementById('supprCartes').className='d-block';
            document.getElementById('cacherCartes').className='d-none';
//            document.getElementById('msg').innerHTML+=' '+premCarte+' = '+deuzCarte+' les 2 cartes sont =';
        }
    }
}
function cacherCartes() {
    premCase.className='cases vert';
    deuzCase.className='cases vert';
    document.getElementById('overlay').className='height0';    // autoriser clic sur tableau
    document.getElementById('cacherCartes').className='d-none';
    document.getElementById('msg').innerHTML=' ';
}
function supprCartes() {
    cartesTrouvees+=2;
    cartesRestantes=12-cartesTrouvees;
    premCase.className='finie';
    premCase.innerHTML='<img src="./captures/jimag00.png">';
    deuzCase.className='finie';
    deuzCase.innerHTML='<img src="./captures/jimag00.png">';
    document.getElementById('msg').innerHTML=' ';
    document.getElementById('overlay').className='height0';    // autoriser clic sur tableau
    // Vérifier si il reste des cartes sur le plateau (casesSupprimees==12) :
    if(cartesTrouvees==12) {
        // afficher "partie gagnée"
        document.getElementById('gagne').className='d-block';
        document.getElementById('table').className='d-none';
        document.getElementById('supprCartes').className='d-none';
//        document.getElementById('nouvPartie').className='vert';
    } else {
        document.getElementById('msg').innerHTML='cases restantes : '+cartesRestantes;
    }
}


/**** mettre 1 seconde avant overlay ****/




/***************** 
<button id="myBtn">Try it</button>

function montrerUneCarte(value,event) {
  alert ("Hello World!");
  event.stopImmediatePropagation(); // Try to remove me
}

function someOtherFunction() {
  alert ("I will not get to say Hello World");
}

let x = document.getElementsByTagName("td");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

******************/

/*
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/





