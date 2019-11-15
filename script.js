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
    let ids = ['a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12',]
   
    for(let i=0;i<cartes.length;i++) {

        let j = Math.floor(Math.random() * ids.length);

        document.getElementById('msg').innerHTML+=j;       //affiche le tirage
        document.getElementById(ids[j]).innerHTML='<img class="" src="./captures/jimag'+cartes[i]+'.gif">'
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
function montrerUneCarte(value) {
    document.getElementsByTagName('td')[value].className='affich';

    // vérifier si une autre carte est affichée

    // si non : afficher dans div#msg "Cliquer une autre carte"

    //si oui : comparer les 2 images affichées
        // si c'est les mêmes : supprimer les 2 images

        // si c'est pas les mêmes, les cacher et afficher le vert

}

function compteur() {
    let cpt=0;
    cpt+=1;
    document.getElementById('msg').innerHTML=cpt+' clicks';
}




/*
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/





