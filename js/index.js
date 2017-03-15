var personnages= new Array();

//Vous inventerez au moins 4 types d'arme dans le jeu, avec des dégâts différents.
//Chaque arme a un nom et un visuel associé.
var armes = new Array();
var arme = Object.create(Arme);
//L'arme par défaut qui équipe les joueurs doit infliger 10 points de dégâts.
arme.init("pistolet",10,"../images/gun.png");
armes.push(arme);
var arme = Object.create(Arme);
arme.init("fusil",20,"../images/sniper.png");
armes.push(arme);
var arme = Object.create(Arme);
arme.init("ak-47",35,"../images/rifle.png");
armes.push(arme);
var arme = Object.create(Arme);
arme.init("bazooka",50,"../images/launcher.png");
armes.push(arme);


var personnageElt = document.getElementById("personnage1");
var resultat = prompt("veuillez saisir le nom du premier participant : ");
var personnage1 = Object.create(Personnage);
personnage1.init(resultat, 100, armes[0], false,"../images/buddy_blue.png");
personnages.push(personnage1);
personnageElt.innerHTML=personnage1.decrire();
personnage1.onChanger = function()
{
    personnageElt.innerHTML = personnage1.decrire();
}
personnage1.onPublish = function() 
{
    alert(personnage1 + " a gagné la partie !");
    window.location.reload();
};

var personnage2Elt = document.getElementById("personnage2");
resultat = prompt("veuillez saisir le nom du second participant");
var personnage2 = Object.create(Personnage);
personnage2.init(resultat, 100, armes[0], false,"../images/buddy_green.png");
personnages.push(personnage2);
personnage2Elt.innerHTML=personnage2.decrire();
personnage2.onChanger = function()
{
    personnage2Elt.innerHTML = personnage2.decrire();
}
personnage2.onPublish = function() 
{
    alert(personnage2 + " a gagné la partie !");
    window.location.reload();
};

var tableau = document.getElementById("tableau");
var cases = creerTableau();
ajouterObjets(cases, personnages, armes);
ajouterDirections();