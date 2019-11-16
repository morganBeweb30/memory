/*
    let c1="1";
    let c2="2";
    let c3="3";
    let c4="4";
    let c5="5";
    let c6="6";
*/


function placerCartes() {

    let cartes = ['1','1','2','2','3','3','4','4','5','5','6','6'];
    let ids = ['a0','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a1']
   
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
let premCarte='';
let deuzCarte='';
let tds=document.querySelectorAll('td');

function montrerUneCarte(value) {
    document.getElementsByTagName('td')[value].className='affich vert';
    let idValue='imga'+value;

    cpt+=1;
    document.getElementById('msg').innerHTML=value; // value de la case
    if(cpt%2!==0) {     // 1 carte retournée
        premCarte=document.getElementById(idValue).src; // chemin de l'image de la case cliquée dans variable premCarte
        document.getElementById('msg').innerHTML+=' '+premCarte+' cliquer sur une autre carte';
    } else {
        deuzCarte=document.getElementById(idValue).src; // chemin de l'image de la case cliquée dans variable deuzCarte
        document.getElementById('msg').innerHTML+=' '+deuzCarte+' tester les 2 cartes';
    }
    /*
    let valeur=value;
    document.getElementById('msg').innerHTML = valeur;
    */
    /*
    // enregistrer td cliqué dans variable prov PremCarte
    function marquerCarte() {
        premCarte=true;
        document.getElementById('msg').innerHTML=premCarte+' ';
    }
    marquerCarte();


//    document.getElementById('msg').innerHTML=cpt+' clicks';

    // vérifier si une autre carte est affichée : %2=0?'oui':'non';
    /*
        // si var premCarte=false alors retourner les cartes

        // si var premCarte=true alors supprimer les 2 cartes

        
        /*
        for(let m=0;m<tds.length;m++) {
            if(m==value) {
                m++;
            }
            // trouver si td != value contient class:'affich'
            let  document.getElementsByTagName('td').className('affich');
        }
        */
        // comparer value à #td
    // }

    // si non : afficher dans div#msg "Cliquer une autre carte"

    //si oui : comparer les 2 images affichées
        // si c'est les mêmes : supprimer les 2 images

        // si c'est pas les mêmes, les cacher et afficher le vert

}






/*
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/





