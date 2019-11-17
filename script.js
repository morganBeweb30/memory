
function placerCartes() {

    let cartes = ['1','1','2','2','3','3','4','4','5','5','6','6'];
    let ids = ['a0','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11']
   
    for(let i=0;i<cartes.length;i++) {

        let j = Math.floor(Math.random() * ids.length);

        document.getElementById('msg').innerHTML+=j;       //affiche le tirage
        document.getElementById(ids[j]).innerHTML='<img id="img'+ids[j]+'" src="./captures/jimag'+cartes[i]+'.gif">';  // 
            //affiche la carte dans la case ids[j] pour vérif
        ids.splice(j,1);                                    //supprime la case remplie
        document.getElementById('msg').innerHTML+=' '+JSON.stringify(ids)+'<br>';      //affiche les cases restatnes pour vérif
    }
}
placerCartes();
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
let cartesTrouvees = [];

function montrerUneCarte(value) {
    document.getElementsByTagName('td')[value].className='affich vert';
    let imgIdValue='imga'+value;
    let tdIdValue='a'+value;
    
    document.getElementById('msg').innerHTML=value;

    cpt+=1;
    document.getElementById('msg').innerHTML+=premCase; // value de la case
    if(cpt%2!==0) {     // 1 carte retournée
        premCase=document.getElementById(tdIdValue);
        premCarte=document.getElementById(imgIdValue).src; // chemin de l'image de la case cliquée dans variable premCarte
        document.getElementById('msg').innerHTML+=' '+premCarte+' cliquer sur une autre carte';
        document.getElementById('msg').innerHTML+=' case : '+premCase+'<br>';
    } else {
        deuzCase=document.getElementById(tdIdValue);
        deuzCarte=document.getElementById(imgIdValue).src; // chemin de l'image de la case cliquée dans variable deuzCarte
        document.getElementById('msg').innerHTML+=' '+deuzCarte+' tester les 2 cartes';
        document.getElementById('msg').innerHTML+=' case : '+deuzCase+'<br>';

        // si pas les mêmes : les recacher
        if(premCarte !== deuzCarte) {
            document.getElementById('msg').innerHTML+=' '+premCarte+' != '+deuzCarte+' les 2 cartes sont !=';
        } else {    //si les mêmes : les supprimer, ajouter 2 à la variable (array) cartesTrouvees, et vérif si array cartesTrouvees.length === 12.
            document.getElementById('msg').innerHTML+=' '+premCarte+' = '+deuzCarte+' les 2 cartes sont =';
        }
        
            // si cartesTrouvees.length !== 12 : afficher "cliquer sur une carte"
            // si cartesTrouvees.length === 12 : afficher "gagné"
    }
}

function cacherCartes() {
    premCase.className='cases vert';
    deuzCase.className='cases vert';
//            document.getElementsByTagName('td')[value].className='cases vert';
}

let casesSupprimees=0;
function supprCartes() {
    casesSupprimees+=2;
    premCase.img.src.innerHTML='<img src="./captures/jimag00.gif">';
    premCase.className='finie';
    deuzCase.img.src.innerHTML='<img src="./captures/jimag00.gif">';
    deuzCase.className='finie';
    // Vérifier si il reste des cartes sur le plateau (casesSupprimees==12) :
    if(casesSupprimees==12) {
        // afficher "partie gagnée"
        document.getElementById('msg').innerHTML='Partie gagnée, Bravo !<br> :)';
    }
}









/*
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/





